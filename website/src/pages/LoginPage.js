import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Stack, IconButton, InputAdornment } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
    if (!isLogin && (email.length > 40 || name.length > 40)) {
      setMessage('Email and name must be less than 40 characters.');
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
        const newUser = {
          password: password,
          email: email,
          name: name,
          groups: [],
          sessions: [],
          major: null,
          graduationYear: null,
          ethnicity: null,
          gender: null
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
    <Container sx={{ width: '100%', mt: 8 }}>
      <Typography component="h1" variant="h2" gutterBottom sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '5rem', mb: 6 }}>
        The Study Community
      </Typography>
      <Box
        component="form"
        onSubmit={isLogin ? handleLogin : handleSignUp}
        sx={{
          width: '100%', // Use maximum width of the container
          maxWidth: 500, // Set a max width for larger screens
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto', // This will center the Box in the container
        }}
      >
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
        {!isLogin && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ maxLength: 40 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputProps={{ maxLength: 40 }}
            />
          </>
        )}
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
    </Container>
  );
}

export default LoginPage;