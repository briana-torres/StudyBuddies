import React, { useState, useEffect } from 'react';
import { Box, TextField, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const FindGroupsPage = () => {
  const history = useHistory();
  const [studyGroups, setStudyGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Initialize or retrieve study groups from local storage
    const storedGroups = JSON.parse(localStorage.getItem('studyGroups')) || [];
    if (!storedGroups.length) {
      const initialGroups = [
        { name: 'CS 2810 Study Group', description: 'Group for CS 2810 students to study together.', course: 'CS 2810', maxGroupSize: 5, members: [], pastSessions: [], id: 1 },
        { name: 'Fundies II', description: 'A supportive group for Fundamentals of Computer Science II.', course: 'CS 2510', maxGroupSize: 4, members: [], pastSessions: [], id: 2 },
        { name: 'CS 3500 OOD', description: 'Object-Oriented Design group discussions and study sessions.', course: 'CS 3500', maxGroupSize: 3, members: [], pastSessions: [], id: 3 },
      ];
      localStorage.setItem('studyGroups', JSON.stringify(initialGroups));
      setStudyGroups(initialGroups);
      setFilteredGroups(initialGroups);
    } else {
      setStudyGroups(storedGroups);
      setFilteredGroups(storedGroups);
    }
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
      <TextField
        placeholder="Search for study groups..."
        variant="outlined"
        fullWidth
        sx={{ mb: 2, mt: 6 }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List sx={{ overflow: 'auto', maxHeight: 300, mb: 2 }}>
        {filteredGroups.map(group => (
          <React.Fragment key={group.id}>
            <ListItem button onClick={() => handleGroupClick(group.id)}>
              <ListItemText primary={group.name} secondary={group.course || "No course specified"} />
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