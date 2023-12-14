import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import Header from '../components/Header';

const notes = [
  { id: 1, note: 'given a symmetric matrix, you should be able to decompose a matrix A into 3 separate matrices.', author: 'John'},
];

const StudySessionPage = () => {

  const handleNoteClick = () => {
    console.log("clicked");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Header title={'CS 2810 Study Session'} />
      <Box sx={{ m: 6 }}>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="start" marginLeft={4}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'left'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" component="h2" gutterBottom>Details</Typography>
            <Typography>Description: 2nd Year Study Group for OOD</Typography>
            <Typography>Course: CS 2810 Mathematical Data Models</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: '360px', mx: 'auto' }}>
            <Typography variant="h4" component="h3" gutterBottom>
              Notes
            </Typography>
            <Paper sx={{ maxHeight: 300, overflow: 'auto', border: '1px solid grey', mb: 2 }}>
              <List>
                {notes.map((note) => (
                  <ListItem button key={note.id} onClick={() => handleNoteClick(note)}>
                    <ListItemText
                      primary={note.note}
                      secondary={note.author}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudySessionPage;
