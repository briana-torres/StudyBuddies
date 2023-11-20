import React from 'react';
import { Box, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const FindGroupsPage = () => {
  const history = useHistory();

  const studyGroups = [
    { name: 'CS 2810 Study Group', id: 1 },
    { name: 'Fundies II', id: 2 },
    { name: 'CS 3500 OOD', id: 3 },
    // ... add more study groups here
  ];

  const handleGroupClick = (groupId) => {
    if (groupId === 3) {
    history.push(`/study-group`);
    } else {
    console.log('clicked');
    }
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title="Find Groups" />
      <Box sx={{ m: 2 }}>
      </Box>
      <TextField
        placeholder="Search for study groups..."
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <List sx={{ overflow: 'auto', maxHeight: 300 }}>
        {studyGroups.map((group) => (
          <React.Fragment key={group.id}>
            <ListItem button onClick={() => handleGroupClick(group.id)}>
              <ListItemText primary={group.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default FindGroupsPage;
