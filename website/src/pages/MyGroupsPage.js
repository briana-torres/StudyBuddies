import React, { useState, useEffect } from 'react';
import { Box, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const MyGroupsPage = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    // Fetch the current user's groups
    const currentUsername = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userGroups = users[currentUsername]?.groups || [];

    // Fetch all groups from local storage
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    const userGroupData = storedGroups.filter(group => userGroups.includes(group.id));
    setAllGroups(userGroupData);
    setFilteredGroups(userGroupData);
  }, []);

  useEffect(() => {
    // Filter groups based on the search term
    const result = allGroups.filter(group => 
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGroups(result);
  }, [searchTerm, allGroups]);

  const handleGroupClick = (groupId) => {
    history.push(`/group-homepage/${groupId}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <Header title="My Groups" />
      <TextField
        placeholder="Search for study groups..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2, mt: 6}}
      />
      <List sx={{ overflow: 'auto', maxHeight: 300, mb: 2 }}>
        {filteredGroups.map((group) => (
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

export default MyGroupsPage;
