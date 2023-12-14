import React from 'react';
import { Box, IconButton, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const HomeHeader = ({ title }) => {
  let history = useHistory();

  const handleProfileClick = () => {
    history.push('/profile');
  };

  const handleInfoClick = () => {
    history.push('/about-us');
  };

  return (
    <Toolbar sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '98%' // Ensures the toolbar takes up the full width
    }}>
      <Box sx={{ flexGrow: 1 }}>
        {title}
      </Box>
      <Box sx={{ display: 'flex' }}>
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

export default HomeHeader;
