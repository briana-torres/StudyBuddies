import React from 'react';
import GroupButton from '../components/GroupButton';
import PastSessions from '../components/PastSessions';
import { Box, Typography, Stack, Container, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    let history = useHistory();

    const handleProfileClick = () => {
      history.push('/profile'); 
    };

    const navigateToFindGroups = () => {
        history.push('/find-groups');
    };

    const navigateToMyGroups = () => {
        history.push('/my-groups');
    };

  return (
    <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header box with the icon on the right */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}>
          Welcome to The Study Community!
        </Typography>
        <IconButton onClick={handleProfileClick} sx={{ position: 'absolute', top: 40, right: 60 }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      {/* Subheader text */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mt: 0 }}>
       Our website allows for the Northeastern community to easily find and create study groups.
      </Typography>
      {/* Main content container */}
      <Container maxWidth="md" sx={{ flexGrow: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Stack direction="row" spacing={10} justifyContent="center" alignItems="flex-start">
            <Stack direction="column" spacing={3}>
             <GroupButton title="Find Groups" onClick={navigateToFindGroups} />
             <GroupButton title="My Groups" onClick={navigateToMyGroups}/>
            </Stack>
          <PastSessions />
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
