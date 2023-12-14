import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const FindGroupsPage = () => {
  const history = useHistory();
  const [studyGroups, setStudyGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    setStudyGroups(storedGroups);
    setFilteredGroups(storedGroups);
  }, []);

  useEffect(() => {
    // Filter groups based on the search term
    const result = studyGroups.filter(group => {
      const searchContent = group.name + group.description + (group.course || '');
      return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
    }).filter(group => group.members.length < (group.maxGroupSize || Infinity));
    setFilteredGroups(result);
  }, [searchTerm, studyGroups]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGroupClick = (groupId) => {
    history.push(`/group-homepage/${groupId}`);
  };

  const handleCreateGroup = () => {
    history.push('/create-group');
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title="Find Groups" />
      <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center', mt: 3 }}>
       Search or scroll through the study groups below, click to navigate to the group homepage and join a group!
      </Typography>
      <TextField
        placeholder="Search for study groups..."
        variant="outlined"
        fullWidth
        sx={{ mb: 2, mt: 4 }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List sx={{ overflow: 'auto', maxHeight: 300, mb: 2 }}>
        {filteredGroups.map(group => (
          <React.Fragment key={group.id}>
            <ListItem button onClick={() => handleGroupClick(group.id)}>
              <ListItemText primary={group.name} secondary={group.description} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 20, left: 0, right: 0 }}>
        <Button variant="contained" color="primary" onClick={handleCreateGroup}
        sx={{ my: 2, py: 2, fontSize: '1.5rem', width: '200px', textTransform: 'none' }}>
          Create Group
        </Button>
      </Box>
    </Box>
  );
};

export default FindGroupsPage;