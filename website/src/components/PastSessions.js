import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

const PastSessions = () => {
  const history = useHistory();
  const [userSessions, setUserSessions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState(null);

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

  const handleDeleteClick = (sessionId, event) => {
    event.stopPropagation();  // Prevent triggering handleSessionClick
    setOpenDialog(true);
    setSelectedSessionId(sessionId);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    const currentUsername = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];

    // Remove session from allSessions
    const updatedAllSessions = allSessions.filter(session => session.id !== selectedSessionId);

    // Remove session id from the current user's sessions
    const updatedUserSessions = users[currentUsername].sessions.filter(id => id !== selectedSessionId);
    users[currentUsername].sessions = updatedUserSessions;

    // Update localStorage
    localStorage.setItem('allSessions', JSON.stringify(updatedAllSessions));
    localStorage.setItem('users', JSON.stringify(users));

    // Update state to reflect deletion
    setUserSessions(prev => prev.filter(session => session.id !== selectedSessionId));
    
    handleCloseDialog();
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
                <IconButton onClick={(e) => handleDeleteClick(session.id, e)}>
                  <DeleteIcon />
                </IconButton>
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

export default PastSessions;
