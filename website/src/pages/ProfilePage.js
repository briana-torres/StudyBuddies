import React,  { useState } from 'react';
import { Box, Typography, TextField, IconButton, Container, InputAdornment , AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ProfilePage = () => {
  let history = useHistory(); 
  const [showPassword, setShowPassword] = useState(false);
  
  const handleBack = () => {
    history.goBack();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <TextField label="Name" required variant="outlined" fullWidth />
          <TextField label="Email" required variant="outlined" fullWidth />
          <TextField label="Username" required variant="outlined" fullWidth />
          <TextField label="Password" 
          inputProps={{ maxLength: 20 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required variant="outlined" fullWidth />
          <TextField label="Major" variant="outlined" fullWidth />
          <TextField label="Graduation Year" variant="outlined" fullWidth />
          <TextField label="Ethnicity" variant="outlined" fullWidth />
          <TextField label="Gender" variant="outlined" fullWidth />
          {/* ... add more fields as needed */}
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;

