import React from 'react';
import { Box} from '@mui/material';
import Header from './Header';

const FindGroupsPage = () => {

  return (
    <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header title="My Groups" />
    </Box>
  );
};

export default FindGroupsPage;