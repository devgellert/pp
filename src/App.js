import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Link, Route ,Switch} from 'react-router-dom';


function App() {
  return (
   
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:aboutid" component={Home}/>
          </Switch>
      </Router>
   
    
  );
}

export default App;
