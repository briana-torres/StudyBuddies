import React from 'react';
import Button from '@mui/material/Button';

const GroupButton = ({ title, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ my: 2, py: 2, fontSize: '2rem', width: '250px', textTransform: 'none' }}
    >
      {title}
    </Button>
  );
};

export default GroupButton;

