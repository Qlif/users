//Core
import React from 'react';
//Components
import Users from './components/Users/Users';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Users</h2>
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
