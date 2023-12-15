import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const PastSessions = () => {
  const history = useHistory();
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const currentUsername = localStorage.getItem('currentUser');
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const currentUserData = users[currentUsername];

    // Get detailed session data for the current user
    if (currentUserData && currentUserData.sessions) {
      const detailedSessions = currentUserData.sessions.map(sessionId =>
        allSessions.find(session => session.id === sessionId)
      ).filter(session => session != null); // Filter out any undefined entries
      setUserSessions(detailedSessions);
    }
  }, []);

  const handleSessionClick = (sessionId) => {
    history.push(`/study-session/${sessionId}`);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '360px' }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center'}}>
        Study Buddy Sessions
      </Typography>
      <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey', mt: 3 }}>
        <List>
          {userSessions.length > 0 ? (
            userSessions.map((session) => (
              <ListItem button key={session.id} onClick={() => handleSessionClick(session.id)}>
                <ListItemText
                  primary={session.name}
                  secondary={`${new Date(session.date).toLocaleDateString()} - ${new Date(session.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`}
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText
                primary="Start studying to see Study Buddy Sessions!"
              />
            </ListItem>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default PastSessions;
