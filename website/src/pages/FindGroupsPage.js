import React from 'react';
import { Box, TextField, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from '/Users/briana/Desktop/HCI/StudyBuddy/StudyBuddy/website/src/components/Header.js';

const FindGroupsPage = () => {
  const history = useHistory();

  const studyGroups = [
    { name: 'CS 2810 Study Group', id: 1 },
    { name: 'Fundies II', id: 2 },
    { name: 'CS 3500 OOD', id: 3 },
  ];

  const handleGroupClick = (groupId) => {
    if (groupId === 3) {
      history.push(`/study-group`);
    } if (groupId === 1) {
      history.push(`/joined-study-group`);
    } else {
      console.log('clicked');
    }
  };

  const handleCreateGroup = () => {
    history.push('/create-group');
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title="Find Groups" />
      <Box sx={{ m: 4 }}>
      </Box>
      <TextField
        placeholder="Search for study groups..."
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <List sx={{ overflow: 'auto', maxHeight: 300, mb: 2 }}> {/* Adjusted the maxHeight and marginBottom */}
        {studyGroups.map((group) => (
          <React.Fragment key={group.id}>
            <ListItem button onClick={() => handleGroupClick(group.id)}>
              <ListItemText primary={group.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}> {/* Adjusted for fixed position */}
        <Button variant="contained" color="primary" onClick={handleCreateGroup}
        sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '200px', textTransform: 'none' }}>
          Create Group
        </Button>
      </Box>
    </Box>
  );
};

export default FindGroupsPage;

