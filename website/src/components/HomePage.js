import React from 'react';
import GroupButton from './GroupButton';
import PastSessions from './PastSessions';
import { Box, Typography, Stack, Container, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    let history = useHistory();

    const handleProfileClick = () => {
      history.push('/profile'); 
    };

  return (
    <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header box with the icon on the right */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Study Buddies
        </Typography>
        <IconButton onClick={handleProfileClick} sx={{ position: 'absolute', top: 30, right: 25 }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      {/* Subheader text */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 4 }}>
        Welcome to your Dashboard!
      </Typography>
      {/* Main content container */}
      <Container maxWidth="md" sx={{ flexGrow: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Stack direction="row" spacing={10} justifyContent="center" alignItems="flex-start">
          <Stack direction="column" spacing={3}>
            <GroupButton title="Find Groups" />
            <GroupButton title="My Groups" />
          </Stack>
          <PastSessions />
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
