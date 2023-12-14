import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from '/Users/briana/Desktop/HCI/StudyBuddy/StudyBuddy/website/src/components/Header.js';

const StudyGroupPage = () => {
  const history = useHistory();
  const groupName = 'CS 3500 OOD'; 

  const handleJoinClick = () => {
    history.push('/joined-success');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Header title={groupName} />
      <Box sx={{ m: 4}}>
      </Box>
      <Grid container spacing={0} marginLeft={4}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'left'}}>
          <Typography variant="h4" component="h2">Details</Typography>
          <Typography>Description: 2nd Year Study Group for OOD</Typography>
          <Typography>Course: CS 3500 OOD</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            sx={{ my: 2, py: 2, fontSize: '2rem', width: '200px', textTransform: 'none' }} 
            variant="contained" 
            color="primary" 
            onClick={handleJoinClick}
          >
            Join
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudyGroupPage;


