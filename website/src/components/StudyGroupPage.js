import React from 'react';
import { Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const StudyGroupPage = () => {
  const history = useHistory();
  const groupName = 'CS 3500 OOD';

  const handleJoinClick = () => {
    history.push('/joined-success');
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title={groupName} />
      <Box sx={{ flexGrow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button sx={{ my: 2, py: 2, fontSize: '5rem', width: '300px', textTransform: 'none' }} 
        variant="contained" color="primary" onClick={handleJoinClick}>
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default StudyGroupPage;

