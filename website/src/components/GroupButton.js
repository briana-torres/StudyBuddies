import React from 'react';
import Button from '@mui/material/Button';

const GroupButton = ({ title }) => {
  const handleClick = () => {
    // Navigation logic will go here
    console.log(`${title} Clicked`);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{ my: 2, py: 3, fontSize: '2rem', width: '250px', textTransform: 'none' }} // Adjust size as needed
    >
      {title}
    </Button>
  );
};

export default GroupButton;

