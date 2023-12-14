import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Stack, IconButton, InputAdornment } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let history = useHistory();

  const validateForm = () => {
    if (!username || !password) {
      setMessage('Username and password are required.');
      return false;
    }
    if (username.length > 20 || password.length > 20) {
      setMessage('Username and password must be less than 20 characters.');
      return false;
    }
    return true;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) || {};
      if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        setMessage('Logged in successfully!');
        history.push('/home');
      } else if (!users[username]) {
        setMessage('The username does not exist.');
      } else if (users[username] && users[username].password !== password) {
        setMessage('The password is incorrect.');
      } else {
        setMessage('Invalid credentials. Please try again.');
      }
    }
  };  

  const handleSignUp = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) || {};
      if (!users[username]) {
        // Create a new user object
        const newUser = {
          password: password,
          pastSessions: []  // Initialize an empty array for past study sessions
        };
        users[username] = newUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        setMessage('User signed up successfully!');
        history.push('/home');
      } else {
        setMessage('User already exists. Please try a different username.');
      }
    }
  };
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
    
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return (
        <Container maxWidth={false} disableGutters sx={{mb: 0}}>
        <Box sx={{ mt: -10, pt: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', 
        width: '100vw', height: '100vh', justifyContent: 'center' }}>
             <Typography component="h1" variant="h1" sx={{ fontSize: '5rem',
              fontWeight: 'bold', textAlign: 'center', width: '100%', mb: 8, mt: 0}}>
            The Study Community
            </Typography>
            <Typography component="h1" variant="h5">
              {isLogin ? 'Login' : 'Sign Up'}
            </Typography>
            <Box component="form" onSubmit={isLogin ? handleLogin : handleSignUp} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                inputProps={{ maxLength: 20 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant="text"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                </Button>
              </Stack>
              {message && (
                <Typography color="secondary" variant="body2" align="center" sx={{ mt: 2 }}>
                  {message}
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      );
    }
    
export default LoginPage;