import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import Header from '/Users/briana/Desktop/HCI/StudyBuddy/StudyBuddy/website/src/components/Header.js';
import PastSessions from '/Users/briana/Desktop/HCI/StudyBuddy/StudyBuddy/website/src/components/PastSessions.js';
import { useHistory } from 'react-router-dom';

const JoinedStudyGroupPage = () => {
  const history = useHistory();
  const groupName = 'CS 2810 Study Group';

  const handleLaunchStudyBuddy = () => {
    history.push('/launch-study-buddy');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Header title={groupName} />
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ mt: 4, mb: 4 }}> 
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom>Details</Typography>
            <Typography>Description: Freshman Study Group for MDM</Typography>
            <Typography>Course: CS 2810 Mathematical Data Models</Typography>
            <Typography>Members: John, Rachel</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={0} sx={{ p: 2, paddingTop:0, height: '100%' }}> 
            <PastSessions />
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}> {/* Adjusted for fixed position */}
        <Button variant="contained" color="primary" onClick={handleLaunchStudyBuddy}
        sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '300px', textTransform: 'none' }}>
          Launch Study Buddy
        </Button>
      </Box>
    </Box>
  );
};

export default JoinedStudyGroupPage;


