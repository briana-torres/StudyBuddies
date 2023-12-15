import React, { useState, useEffect} from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
import { useHistory, useParams } from 'react-router-dom';

const StartStudyBuddyPage = () => {
  let history = useHistory();
  const { groupId } = useParams();

  // State for the form fields
  const [sessionName, setSessionName] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [reminderMessage, setReminderMessage] = useState('');
  const [reminderFrequency, setReminderFrequency] = useState('');
  
  // State for members and sessions
  const [members, setMembers] = useState([]);
  const [allSessions, setAllSessions] = useState([]);

  // Get the current user's username
  const currentUsername = localStorage.getItem('currentUser');

  useEffect(() => {
    // Fetch group members and all sessions from local storage
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const allStoredSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    
    // Find the current group based on groupId
    const currentGroup = storedGroups.find(group => group.id === parseInt(groupId, 10));
    if (currentGroup) {
      // Set members for the member selection dropdown, ensure current user is selected
      setMembers(currentGroup.members.concat(currentUsername).filter((value, index, self) => self.indexOf(value) === index));
      setSelectedMembers([currentUsername]);
    }
    
    // Set all sessions from local storage
    setAllSessions(allStoredSessions);
  }, [groupId, currentUsername]);

  // ... other handlers and logic

  const handleLaunchStudyBuddy = () => {
    // Check for required fields
    if (!sessionName.trim()) {
      alert("Session name is required.");
      return;
    }

    const newSessionId = allSessions.length + 1;

    // Create the new session object
    const newSession = {
      name: sessionName,
      members: selectedMembers,
      date: new Date().toLocaleDateString(),
      startTime: new Date().toISOString(),
      endTime: null,
      reminderMessage: reminderMessage || null,
      reminderFrequency: reminderFrequency || null,
      notes: [],
      groupId: parseInt(groupId, 10),
      id: newSessionId
    };

    // Save the new session
    const updatedSessions = [...allSessions, newSession];
    localStorage.setItem('allSessions', JSON.stringify(updatedSessions));

    // Add new session id to the current group's sessions list and to the user's sessions
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const updatedGroups = storedGroups.map(group => {
      if (group.id === parseInt(groupId, 10)) {
        return { ...group, pastSessions: [...group.pastSessions, newSession.id] };
      }
      return group;
    });
    localStorage.setItem('studyGroups', JSON.stringify(updatedGroups));

    // Add new session id to the current user's sessions list
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const currentUserData = users[currentUsername] || {};
    currentUserData.sessions = currentUserData.sessions ? [...currentUserData.sessions, newSession.id] : [newSession.id];
    users[currentUsername] = currentUserData;
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to Study Buddy page
    history.push(`/study-buddy/${groupId}/${newSessionId}`);
  };

  const handleExitClick = () => {
    history.push(`/group-homepage/${groupId}`);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="exit" onClick={handleExitClick}>
          <CloseIcon />
        </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center'}}>
            Create Study Buddy Session
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box component="form" sx={{ mt: 4, '& > :not(style)': { m: 2 } }}>
          <TextField 
            label="Session Name" 
            variant="outlined" 
            fullWidth 
            required
            inputProps={{ maxLength: 30 }}
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="members-label">Members</InputLabel>
            <Select
              labelId="members-label"
              id="members"
              multiple
              value={selectedMembers}
              onChange={(e) => setSelectedMembers(e.target.value)}
              renderValue={(selected) => selected.join(', ')}
              label="Members"
            >
              {members.map((member) => (
                <MenuItem key={member} value={member}>
                  {member}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField 
            label="Reminder Message" 
            variant="outlined" 
            fullWidth 
            inputProps={{ maxLength: 50 }}
            value={reminderMessage}
            onChange={(e) => setReminderMessage(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="reminder-frequency-label">Reminder Frequency</InputLabel>
            <Select
              labelId="reminder-frequency-label"
              id="reminder-frequency"
              value={reminderFrequency}
              onChange={(e) => setReminderFrequency(e.target.value)}
              label="Reminder Frequency"
            >
              <MenuItem value={1}>1 min</MenuItem>
              <MenuItem value={5}>5 min</MenuItem>
              <MenuItem value={10}>10 min</MenuItem>
              <MenuItem value={15}>15 min</MenuItem>
              <MenuItem value={30}>30 min</MenuItem>
              <MenuItem value={60}>60 min</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleLaunchStudyBuddy}
            sx={{ my: 2, py: 2, fontSize: '1.5rem', width: 'auto', textTransform: 'none' }}
          >
            Start Study Buddy Session
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default StartStudyBuddyPage;
