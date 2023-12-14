import React,  { useState, useEffect} from 'react';
import { Box, Typography, TextField, IconButton, Container, InputAdornment, AppBar, Toolbar, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ProfilePage = () => {
  let history = useHistory(); 
  const [currentUser, setCurrentUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const updateUserProfile = (key, value) => {
    setCurrentUser(prevState => {
      const updatedUser = { ...prevState, [key]: value };
      // Save the updated user data to local storage
      const users = JSON.parse(localStorage.getItem('users')) || {};
      users[localStorage.getItem('currentUser')] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
      return updatedUser;
    });
  };

  useEffect(() => {
    const username = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      setCurrentUser(users[username]);
    }
    
    // Adding an event listener for storage changes
    const handleStorageChange = () => {
      const updatedUsers = JSON.parse(localStorage.getItem('users')) || {};
      if (updatedUsers[username]) {
        setCurrentUser(updatedUsers[username]);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleBack = () => {
    history.goBack();
  };

  const handleUsernameClick = () => {
    alert("Your username cannot be changed.");
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{mt: 2}}>
        <Toolbar>
          <IconButton onClick={handleBack} sx={{ visibility: 'visible' }}>
          <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4" component="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
            Account Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{mt: 4}}>
        {/* The rest of your form */}
        <Box component="form" sx={{'& > :not(style)': { m: 1 } }}>
        <TextField
          label="Name"
          required
          variant="outlined"
          fullWidth
          name="name"
          value={currentUser.name || ''}
          onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          label="Email"
          required
          variant="outlined"
          fullWidth
          name="email"
          value={currentUser.email || ''}
          onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          label={currentUser && currentUser.username ? "" : "Username"}
          required
          variant="outlined"
          fullWidth
          name="username"
          onClick={handleUsernameClick}
          value={localStorage.getItem('currentUser') || ''}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          required
          variant="outlined"
          fullWidth
          name="password"
          value={currentUser.password || ''}
          onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          inputProps={{ maxLength: 20 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Major"
          variant="outlined"
          fullWidth
          name="major"
          value={currentUser.major || ''}
          onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <FormControl fullWidth>
          <InputLabel>Graduation Year</InputLabel>
          <Select
            label="Graduation Year"
            name="graduationYear"
            value={currentUser.graduationYear || ''}
            onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          >
            {/* Dropdown options for graduation years */}
            {Array.from(new Array(5), (_, i) => (
              <MenuItem key={i} value={new Date().getFullYear() + i}>
                {new Date().getFullYear() + i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Ethnicity"
          variant="outlined"
          fullWidth
          name="ethnicity"
          value={currentUser.ethnicity || ''}
          onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            value={currentUser.gender || ''}
            onChange={(e) => updateUserProfile(e.target.name, e.target.value)}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {/* ... add more fields as needed */}
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;

