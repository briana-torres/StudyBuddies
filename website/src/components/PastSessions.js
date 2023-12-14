import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const PastSessions = () => {
  const history = useHistory();
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const currentUsername = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const currentUserData = users[currentUsername];
    setUserSessions(currentUserData.sessions || []);
  }, []);

  const handleSessionClick = (session) => {
    history.push('/study-session');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '360px' }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center'}}>
        Study Buddy Sessions
      </Typography>
      <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey', mt: 3}}>
        <List>
          {userSessions.length > 0 ? (
            userSessions.map((session) => (
              <ListItem button key={session.id} onClick={() => handleSessionClick(session)}>
                <ListItemText
                  primary={session.title}
                  secondary={`${session.date} - ${session.duration}`}
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
