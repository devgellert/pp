import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Pictures from './components/Pictures/Pictures';
import Book from './components/Book';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';


function App() {

  return (
      <Provider store={store}>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pictures" component={Pictures}/>
            <Route path="/book" component={Book}/>
          </Switch>
        </Router>
      </Provider>
      
  );
}

export default App;
