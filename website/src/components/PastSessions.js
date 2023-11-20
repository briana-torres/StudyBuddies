import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';

const sessions = [
  { id: 1, title: 'CS 2810 MM', date: '10/10/2023', duration: '30min' },
  { id: 2, title: 'CS 2810 MM', date: '10/10/2023', duration: '30min' },
  { id: 3, title: 'CS 2810 MM', date: '10/10/2023', duration: '30min' },
  { id: 4, title: 'CS 2810 MM', date: '10/10/2023', duration: '30min' },
  // ... more sessions
];

const PastSessions = () => {
  const handleSessionClick = (session) => {
    console.log('Session clicked:', session);
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



