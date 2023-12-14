import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid, Menu, MenuItem} from '@mui/material';
import Header from '../components/Header';
import GroupSessions from '../components/GroupSessions';
import { useHistory } from 'react-router-dom';

const GroupHomePage = () => {
  const history = useHistory();
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMemberClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fetch users and groups from localStorage
  const fetchUsersAndGroups = useCallback(() => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const groups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    return { users, groups };
  }, []);

  useEffect(() => {
    const { users, groups } = fetchUsersAndGroups();
    const currentUsername = localStorage.getItem('currentUser');
    const currentUserData = users[currentUsername];
    const groupData = groups.find(g => g.id === Number(groupId));

    if (groupData) {
      setGroup(groupData);
      setHasJoined(groupData.members.includes(currentUsername));
    } else {
      console.log(`Group not found for ID: ${groupId}`);
    }

    setCurrentUser(currentUserData);
  }, [groupId, fetchUsersAndGroups]);

  const handleJoinClick = () => {
    const currentUsername = localStorage.getItem('currentUser');
    const { users, groups } = fetchUsersAndGroups();
  
    if (currentUsername && group && !hasJoined) {
      // Add the current username to the group's member list
      const updatedGroups = groups.map(g => {
        if (g.id === Number(groupId)) {
          return { ...g, members: [...g.members, currentUsername] };
        }
        return g;
      });
  
      // Add the group ID to the current user's groups list
      const updatedUserGroups = [...(users[currentUsername].groups || []), Number(groupId)];
  
      // Update the users object with the new group list for the current user
      users[currentUsername] = { ...users[currentUsername], groups: updatedUserGroups };
      localStorage.setItem('users', JSON.stringify(users));
  
      // Update the local storage with the new groups data
      localStorage.setItem('studyGroups', JSON.stringify(updatedGroups));
  
      // Update the state to reflect the changes
      setGroup(prevGroup => ({ ...prevGroup, members: [...prevGroup.members, currentUsername] }));
      setCurrentUser(users[currentUsername]); // Assuming setCurrentUser expects the full user object
      setHasJoined(true);
    }
  };  

  const handleStartSessionClick = () => {
    history.push('/study-session');
  };

  if (!group) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title={group.name} />
      <Container maxWidth="lg" sx={{ mt: 8 }}> {/* Container to control the max width and centering */}
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center"> {/* Align items to the start and justify content to center */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}> {/* Box to align text to the left */}
              <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>Details</Typography>
              <Typography gutterBottom>Description: {group.description}</Typography>
              <Typography gutterBottom>Course: {group.course || "N/A"}</Typography>
              <Typography gutterBottom>Members: {group.members.length}</Typography>
              <Button 
                sx={{ py: 1, fontSize: '1rem', textTransform: 'none' }} 
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
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                PaperProps={{
                  style: {
                    width: anchorEl ? anchorEl.clientWidth : undefined,
                  },
                }}
              >
                {group.members.map((member, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    {member}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center', alignContent: 'center'}}>
            <Typography variant="h4" component="h2" gutterBottom>Study Buddy Sessions</Typography>
            <GroupSessions groupId={groupId} />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 40, left: 0, right: 0 }}>
          <Button 
            sx={{ 
              py: 2, 
              fontSize: '1.5rem', 
              textTransform: 'none', 
              px: 3, // Add padding on the left and right to ensure button size adjusts with content
              minWidth: '300px', // Ensure button is not smaller than this width
            }} 
            variant="contained" 
            color="primary" 
            onClick={hasJoined ? handleStartSessionClick : handleJoinClick}
          >
            {hasJoined ? 'Start Study Buddy Session' : 'Join Group'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GroupHomePage;



