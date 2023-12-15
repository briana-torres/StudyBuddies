import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const GroupSessions = ({ groupId }) => {
  const [groupSessions, setGroupSessions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const groupData = storedGroups.find(g => g.id === Number(groupId));

    if (groupData && groupData.pastSessions) {
      const sessionsDetails = groupData.pastSessions.map(sessionId =>
        allSessions.find(session => session.id === sessionId)
      ).filter(session => session != null);
      setGroupSessions(sessionsDetails);
    }
  }, [groupId]);

  const handleSessionClick = (sessionId) => {
    history.push(`/study-session/${sessionId}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ maxWidth: '360px', width: '100%', mt: 2 }}>
        <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey' }}>
          <List>
            {groupSessions.length > 0 ? (
              groupSessions.map((session, index) => {
                const startTime = new Date(session.startTime);
                return (
                  <ListItem button key={index} onClick={() => handleSessionClick(session.id)}>
                    <ListItemText
                      primary={session.name}
                      secondary={`${new Date(session.date).toLocaleDateString()} ${startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`}
                      />
                  </ListItem>
                );
              })
            ) : (
              <ListItem>
                <ListItemText primary="No past study sessions found for this group." />
              </ListItem>
            )}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default GroupSessions;
