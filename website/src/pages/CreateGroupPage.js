import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';

const CreateGroupPage = () => {
  let history = useHistory();
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState('');
  const currentUsername = localStorage.getItem('currentUser');

  const handleExitClick = () => {
    history.push('/find-groups');
  };

  const handleCreateGroupClick = () => {
    if (!groupName || groupName.length > 40 || !description || description.length > 200) {
      // Handle validation error
      alert("Please enter valid group name and description.");
      return;
    }

    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const newGroupId = storedGroups.length + 1;
    const newGroup = {
      name: groupName,
      description: description,
      course: course || "N/A",
      maxGroupSize: maxGroupSize ? parseInt(maxGroupSize, 10) : undefined,
      members: [currentUsername],
      pastSessions: [],
      id: newGroupId,
    };
    storedGroups.push(newGroup);
    localStorage.setItem('studyGroups', JSON.stringify(storedGroups));
    const currentUserData = users[currentUsername] || {};
    currentUserData.groups = currentUserData.groups ? [...currentUserData.groups, newGroupId] : [newGroupId];
    users[currentUsername] = currentUserData;
    localStorage.setItem('users', JSON.stringify(users));
    history.push(`/group-homepage/${newGroupId}`);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="exit" onClick={handleExitClick}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
            Create Group
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box component="form" sx={{ '& > :not(style)': { m: 1 } }}>
          <TextField label="Group Name" required variant="outlined" fullWidth 
            value={groupName} onChange={(e) => setGroupName(e.target.value)} inputProps={{ maxLength: 40 }}/>
          <TextField label="Description" required variant="outlined" fullWidth 
            value={description} onChange={(e) => setDescription(e.target.value)} inputProps={{ maxLength: 200 }}/>
          <TextField label="Course" variant="outlined" fullWidth 
            value={course} onChange={(e) => setCourse(e.target.value)} />
          <TextField label="Max Group Size" type="number" variant="outlined" fullWidth 
            value={maxGroupSize} onChange={(e) => setMaxGroupSize(e.target.value)} inputProps={{ min: 1 }} />
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}>
        <Button variant="contained" color="primary" onClick={handleCreateGroupClick}
          sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '200px', textTransform: 'none' }}>
          Create Group
        </Button>
      </Box>
    </>
  );
};

export default CreateGroupPage;

