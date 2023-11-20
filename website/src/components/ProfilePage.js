import React from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  let history = useHistory(); 

  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
            Account Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        {/* The rest of your form */}
        <Box component="form" sx={{'& > :not(style)': { m: 1 } }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Username" variant="outlined" fullWidth />
          <TextField label="Ethnic Background" variant="outlined" fullWidth />
          <TextField label="Year" variant="outlined" fullWidth />
          {/* ... add more fields as needed */}
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;

