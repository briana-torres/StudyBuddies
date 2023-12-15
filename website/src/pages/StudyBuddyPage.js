import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Snackbar, Container, Button, Grid, Menu, MenuItem, List } from '@mui/material';
import NotesComponent from '../components/Notes';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';

const StudyBuddyPage = () => {
  const history = useHistory();
  const { sessionId } = useParams();
  const { groupId } = useParams();
  const [session, setSession] = useState(null);
  const [membersDetails, setMembersDetails] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const sessionDetails = allSessions.find(s => s.id === parseInt(sessionId, 10));
    
    if (sessionDetails) {
      setSession(sessionDetails);
      const memberUsernames = sessionDetails.members;
      const memberNames = memberUsernames.map(username => users[username] ? users[username].name : "Unknown");
      setMembersDetails(memberNames);
    }

    if (sessionDetails && sessionDetails.reminderMessage && sessionDetails.reminderFrequency) {
      const intervalId = setInterval(() => {
        setOpenSnackbar(true);
      }, sessionDetails.reminderFrequency * 60000); // Convert minutes to milliseconds

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }

  }, [sessionId]);

  const handleMemberClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleEndSession = () => {
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const updatedSessions = allSessions.map(s => {
      if (s.id === parseInt(sessionId, 10)) {
        return { ...s, endTime: new Date().toISOString() };
      }
      return s;
    });
    localStorage.setItem('allSessions', JSON.stringify(updatedSessions));
    history.push(`/group-homepage/${groupId}`);
  };

  if (!session) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
       {session.name}
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>Session Details</Typography>
              <Typography gutterBottom>Reminder Message: {session.reminderMessage || 'None'}</Typography>
              <Typography gutterBottom>Reminder Frequency: {session.reminderFrequency || 'None'}</Typography>
              <Typography gutterBottom>Members: {membersDetails.length}</Typography>
              <Button 
                sx={{ py: 0.5, fontSize: '1rem', textTransform: 'none' }} 
                variant="contained" 
                color="primary" 
                onClick={handleMemberClick}
                aria-controls="members-menu"
                aria-haspopup="true"
              >
                Show all members
              </Button>
              <Menu
                id="members-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {membersDetails.map((name, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    {name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>Notes</Typography>
            <NotesComponent sessionId={session.id} />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {/* Map through notes here */}
            </List>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 40, left: 0, right: 0 }}>
          <Button 
            sx={{ py: 2, fontSize: '1.5rem', textTransform: 'none' }}
            variant="contained" 
            color="primary" 
            onClick={handleEndSession}
          >
            End Study Buddy Session
          </Button>
        </Box>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {session.reminderMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default StudyBuddyPage;
