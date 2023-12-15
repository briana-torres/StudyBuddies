import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import FindGroupsPage from './pages/FindGroupsPage';
import MyGroupsPage from './pages/MyGroupsPage';
import GroupHomePage from './pages/GroupHomePage';
import CreateGroupPage from './pages/CreateGroupPage';
import StudySessionPage from './pages/StudySessionPage';
import StartStudyBuddyPage from './pages/StartStudyBuddyPage';
import StudyBuddyPage from './pages/StudyBuddyPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/find-groups" component={FindGroupsPage} />
        <Route path="/my-groups" component={MyGroupsPage} />
        <Route path="/group-homepage/:groupId" component={GroupHomePage} />
        <Route path="/create-group" component={CreateGroupPage} />
        <Route path="/study-session/:sessionId" component={StudySessionPage} />
        <Route path="/start-study-buddy/:groupId" component={StartStudyBuddyPage} />
        <Route path="/study-buddy/:groupId/:sessionId" component={StudyBuddyPage} />
        <Route path="/about-us" component={AboutUsPage} />
      </Switch>
    </Router>
  );
}

export default App;



