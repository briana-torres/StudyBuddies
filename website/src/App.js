import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import FindGroupsPage from './components/FindGroupsPage';
import MyGroupsPage from './components/MyGroupsPage';
import StudyGroupPage from './components/StudyGroupPage';
import JoinedSuccessPage from './components/JoinedSuccessPage';
import CreateGroupPage from './components/CreateGroupPage';
import CreatedSuccessPage from './components/CreatedSuccessPage';
import JoinedStudyGroupPage from './components/JoinedStudyGroupPage';
import StudySessionPage from './components/StudySessionPage';
import LaunchStudyBuddyPage from './components/LaunchStudyBuddyPage';
import LaunchSuccessPage from './components/LaunchSuccessPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/find-groups" component={FindGroupsPage} />
        <Route path="/my-groups" component={MyGroupsPage} />
        <Route path="/study-group" component={StudyGroupPage} />
        <Route path="/joined-success" component={JoinedSuccessPage} />
        <Route path="/create-group" component={CreateGroupPage} />
        <Route path="/created-success" component={CreatedSuccessPage} />
        <Route path="/joined-study-group" component={JoinedStudyGroupPage} />
        <Route path="/study-session" component={StudySessionPage} />
        <Route path="/launch-study-buddy" component={LaunchStudyBuddyPage} />
        <Route path="/launch-success" component={LaunchSuccessPage} />
      </Switch>
    </Router>
  );
}

export default App;


