import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import FindGroupsPage from './components/FindGroupsPage';
import MyGroupsPage from './components/MyGroupsPage';
import StudyGroupPage from './components/StudyGroupPage';
import JoinedSuccessPage from './components/JoinedSuccessPage';

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
      </Switch>
    </Router>
  );
}

export default App;


