import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Pictures from './components/Pictures';
import {BrowserRouter as Router, Link, Route ,Switch} from 'react-router-dom';


function App() {
  return (
   
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pictures" component={Pictures}/>
          </Switch>
      </Router>
   
    
  );
}

export default App;
