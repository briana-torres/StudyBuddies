import React from 'react';
import { Box, Typography, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';

const Header = ({ title }) => {
  let history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };

  const handleProfileClick = () => {
    history.push('/profile'); 
  };

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
        {title}
    </Typography>
    <Box>
        <IconButton onClick={handleHomeClick}>
        <HomeIcon fontSize="large"/>
        </IconButton>
        <IconButton onClick={handleProfileClick}>
        <AccountCircleIcon fontSize="large"/>
        </IconButton>
    </Box>
    </Toolbar>
  );
};

export default Header;
