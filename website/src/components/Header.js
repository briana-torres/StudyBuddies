import React from 'react';
import { Box, Typography, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const Header = ({ title }) => {
  let history = useHistory();

  const handleHomeClick = () => {
    history.push('/home');
  };

  const handleProfileClick = () => {
    history.push('/profile');
  };

  const handleInfoClick = () => {
    history.push('/about-us');
  };

  return (
    <Toolbar sx={{ width: '98%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        {/* Invisible placeholder to balance the title */}
        <IconButton sx={{ visibility: 'hidden' }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleHomeClick}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleInfoClick}>
          <InfoIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default Header;


