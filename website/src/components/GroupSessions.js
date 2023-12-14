import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';

const GroupSessions = ({ groupId }) => {
  const [groupSessions, setGroupSessions] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const groupData = storedGroups.find(g => g.id === Number(groupId));

    if (groupData && groupData.pastSessions) {
      setGroupSessions(groupData.pastSessions);
    }
  }, [groupId]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ maxWidth: '360px', width: '100%' }}>
        <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey' }}>
          <List>
            {groupSessions.length > 0 ? (
              groupSessions.map((session, index) => (
                <ListItem key={index}>
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
    </Box>
  );
};

export default GroupSessions;

