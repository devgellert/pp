import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Pictures from './components/Pictures/Pictures';
import Book from './components/Book/Book';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';


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
          <Footer/>
        </Router>
      </Provider>
      
  );
}

export default App;
