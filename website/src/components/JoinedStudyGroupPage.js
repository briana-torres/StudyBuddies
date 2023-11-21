import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Header from './Header';
import PastSessions from './PastSessions';

const JoinedStudyGroupPage = () => {
  const groupName = 'CS 2810 Study Group';

  return (
    <Box sx={{ p: 4 }}>
      <Header title={groupName} />
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ mt: 4, mb: 4 }}> 
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom>Details</Typography>
            <Typography>Description: 2nd Year Study Group for OOD</Typography>
            <Typography>Course: CS 3500 OOD</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={0} sx={{ p: 2, paddingTop:0, height: '100%' }}> 
            <PastSessions />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinedStudyGroupPage;


