import React from 'react';
import GroupButton from '../components/GroupButton';
import PastSessions from '../components/PastSessions';
import { Box, Typography, Stack, Container} from '@mui/material';
import { useHistory } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

const HomePage = () => {
    let history = useHistory();

    const navigateToFindGroups = () => {
        history.push('/find-groups');
    };

    const navigateToMyGroups = () => {
        history.push('/my-groups');
    };

  return (
    <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HomeHeader/>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: -1}}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '5rem'}}>
          The Study Community
        </Typography>
      </Box>
      {/* Subheader text */}
      <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center', mt: -3 }}>
       Our website allows for the Northeastern community to easily find and create study groups.
      </Typography>
      {/* Main content container */}
      <Container maxWidth="md" sx={{ flexGrow: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: -4}}>
        <Stack direction="row" spacing={10} justifyContent="center" alignItems="flex-start">
            <Stack direction="column" spacing={3}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center'}}>
                Study Groups
              </Typography>
             <GroupButton title="Find Groups" onClick={navigateToFindGroups} />
             <GroupButton title="My Groups" onClick={navigateToMyGroups}/>
            </Stack>
          <PastSessions/>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
