import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header';

const JoinedSuccessPage = () => {
  return (
    <Box>
        <Header title="" />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
            <Typography variant="h4">
                Yay, you joined!
            </Typography>
            </Box>
    </Box>
  );
};

export default JoinedSuccessPage;
