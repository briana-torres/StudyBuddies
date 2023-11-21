import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const sessions = [
  { id: 1, title: 'CS 2810 Study Group', date: '10/10/2023', duration: '30min' },
];

const PastSessions = () => {
  const history = useHistory();

  const handleSessionClick = (session) => {
    history.push('/study-session');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '360px' }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Past Study Sessions
      </Typography>
      <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey', mb: 2 }}>
        <List>
          {sessions.map((session) => (
            <ListItem button key={session.id} onClick={() => handleSessionClick(session)}>
              <ListItemText
                primary={session.title}
                secondary={`${session.date} - ${session.duration}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default PastSessions;



