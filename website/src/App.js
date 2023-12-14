import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import FindGroupsPage from './pages/FindGroupsPage';
import MyGroupsPage from './pages/MyGroupsPage';
import StudyGroupPage from './pages/StudyGroupPage';
import JoinedSuccessPage from './pages/JoinedSuccessPage';
import CreateGroupPage from './pages/CreateGroupPage';
import CreatedSuccessPage from './pages/CreatedSuccessPage';
import JoinedStudyGroupPage from './pages/JoinedStudyGroupPage';
import StudySessionPage from './pages/StudySessionPage';
import LaunchStudyBuddyPage from './pages/LaunchStudyBuddyPage';
import LaunchSuccessPage from './pages/LaunchSuccessPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
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


