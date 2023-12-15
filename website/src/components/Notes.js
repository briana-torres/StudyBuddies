import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const NotesComponent = ({ sessionId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const session = allSessions.find(s => s.id === parseInt(sessionId, 10));
    if (session && session.notes) {
      setNotes(session.notes);
    }
  }, [sessionId]);

  const handleAddNote = () => {
    if (!newNote.trim()) return;

    const allSessions = JSON.parse(localStorage.getItem('allSessions')) || [];
    const sessionIndex = allSessions.findIndex(s => s.id === parseInt(sessionId, 10));

    if (sessionIndex !== -1) {
      const updatedNotes = [...notes, newNote];
      allSessions[sessionIndex].notes = updatedNotes;
      localStorage.setItem('allSessions', JSON.stringify(allSessions));
      setNotes(updatedNotes);
      setNewNote(''); // Clear input field
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, mx: 'auto' }}>
      <Paper sx={{ maxHeight: 300, overflow: 'auto', mb: 2 }}>
        <List>
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <ListItem key={index}>
                <ListItemText primary={note} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No notes to display" />
            </ListItem>
          )}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <TextField
          label="New Note"
          variant="outlined"
          fullWidth
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNote}
        >
          Add Note
        </Button>
      </Box>
    </Box>
  );
};

export default NotesComponent;
