import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header';

const JoinedSuccessPage = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Header title="" />
      <Typography variant="h4">
        Yay, you joined!
      </Typography>
    </Box>
  );
};

export default JoinedSuccessPage;
