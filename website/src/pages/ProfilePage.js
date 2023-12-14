import React from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  let history = useHistory(); 
  
  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{mt: 2}}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="home" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton> */}
          <IconButton onClick={handleBack} sx={{ visibility: 'visible' }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
          <Typography variant="h4" component="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
            Account Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{mt: 4}}>
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

