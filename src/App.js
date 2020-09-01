//Core
import React from 'react';
//Components
import Users from './components/Users/Users';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserPosts from './components/Users/UserPosts';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Router>
            <Switch>
              <Route path="/" component={Users}/>
              <Route path="/userposts/idUser" component={UserPosts}/>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
