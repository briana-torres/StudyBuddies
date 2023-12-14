import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Container, AppBar, Toolbar, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { useHistory } from 'react-router-dom';

const StartStudyBuddyPage = () => {
  let history = useHistory(); 

  // State for selected members
  const [members, setMembers] = useState([]);

  // Handle change for members selection
  const handleMembersChange = (event) => {
    setMembers(event.target.value);
  };

  // Dummy member options - replace this with actual data
  const memberOptions = ['John', 'Rachel'];

  const handleExitClick = () => {
    history.push('/joined-study-group'); 
  };

  const handleLaunchStudyBuddy = () => {
    history.push('/launch-success'); 
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="exit" onClick={handleExitClick}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
            Create Study Buddy Session
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ m: 6 }}>
      </Box>
      <Container maxWidth="sm">
        <Box component="form" sx={{'& > :not(style)': { m: 1 } }}>
          <TextField label="Duration" variant="outlined" fullWidth />
          <FormControl fullWidth>
            <InputLabel id="members-label">Members</InputLabel>
            <Select
                labelId="members-label"
                id="members"
                multiple
                value={members}
                onChange={handleMembersChange}
                renderValue={(selected) => selected.length > 0 ? selected.join(', ') : <em>Members</em>}
                label="Members" 
                InputLabelProps={{
                shrink: members.length > 0,
                }}
            >
                {memberOptions.map((name) => (
                <MenuItem key={name} value={name}>
                    {name}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}> 
        <Button variant="contained" color="primary" onClick={handleLaunchStudyBuddy}
        sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '400px', textTransform: 'none' }}>
          Start Study Buddy Session
        </Button>
      </Box>
    </>
  );
};

export default StartStudyBuddyPage;
