import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

const GroupSessions = ({ groupId }) => {
  const [groupSessions, setGroupSessions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
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

  const handleDeleteClick = (sessionId, event) => {
    event.stopPropagation();  // Prevent triggering handleSessionClick
    setOpenDialog(true);
    setSelectedSessionId(sessionId);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    
    // Remove session from allSessions
    const updatedAllSessions = allSessions.filter(session => session.id !== selectedSessionId);

    // Remove session id from the group's pastSessions
    const updatedGroups = storedGroups.map(group => {
      if (group.id === Number(groupId)) {
        return { ...group, pastSessions: group.pastSessions.filter(id => id !== selectedSessionId) };
      }
      return group;
    });

    // Update localStorage
    localStorage.setItem('allSessions', JSON.stringify(updatedAllSessions));
    localStorage.setItem('studyGroups', JSON.stringify(updatedGroups));

    // Update state to reflect deletion
    setGroupSessions(prev => prev.filter(session => session.id !== selectedSessionId));
    
    handleCloseDialog();
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
                    <IconButton onClick={(e) => handleDeleteClick(session.id, e)}>
                      <DeleteIcon />
                    </IconButton>
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

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this session?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GroupSessions;
