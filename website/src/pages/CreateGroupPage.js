import React from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { useHistory } from 'react-router-dom';

const CreateGroupPage = () => {
  let history = useHistory(); 

  const handleExitClick = () => {
    history.push('/find-groups'); 
  };

  const handleCreateGroupClick = () => {
    history.push('/created-success'); 
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="exit" onClick={handleExitClick}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
            Create Group
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ m: 6 }}>
      </Box>
      <Container maxWidth="sm">
        {/* The form for creating a group */}
        <Box component="form" sx={{'& > :not(style)': { m: 1 } }}>
          <TextField label="Group Name" variant="outlined" fullWidth />
          <TextField label="Description" variant="outlined" fullWidth />
          <TextField label="Course" variant="outlined" fullWidth />
          {/* ... add more fields as needed for group creation */}
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}> {/* Adjusted for fixed position */}
        <Button variant="contained" color="primary" onClick={handleCreateGroupClick}
        sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '200px', textTransform: 'none' }}>
          Create Group
        </Button>
      </Box>
    </>
  );
};

export default CreateGroupPage;
