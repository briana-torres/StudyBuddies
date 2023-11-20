import React from 'react';
import GroupButton from './GroupButton';
import PastSessions from './PastSessions';
import { Box, Typography, Stack, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 4, textAlign: 'left' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Study Buddies
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Welcome to your Dashboard!
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ flexGrow: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Stack direction="row" spacing={10} justifyContent="center" alignItems="flex-start">
          <Stack direction="column" spacing={3}>
            <GroupButton title="Find Groups" />
            <GroupButton title="My Groups" />
          </Stack>
          <PastSessions />
        </Stack>
      </Container>
      {/* If there's footer content, it goes here */}
    </Box>
  );
};

export default HomePage;







