import React from 'react';
import { Box, TextField, List, ListItem, ListItemText, Divider,} from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const FindGroupsPage = () => {
  const history = useHistory();

  const studyGroups = [
    { name: 'CS 2810 Study Group', id: 1 },
  ];

  const handleGroupClick = (groupId) => {
    history.push(`/joined-study-group`);
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title="My Groups" />
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
    </Box>
  );
};

export default FindGroupsPage;