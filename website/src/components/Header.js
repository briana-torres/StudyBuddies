import React from 'react';
import { Box, Typography, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

const Header = ({ title }) => {
  let history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };

  const handleProfileClick = () => {
    history.push('/profile');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleBack} sx={{ visibility: 'visible' }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        {/* Invisible placeholder to balance the title */}
        <IconButton sx={{ visibility: 'hidden' }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleHomeClick}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default Header;


