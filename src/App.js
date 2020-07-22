import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navigationbar from './components/navbar-component';
import Jumbo from './components/jumbotron-component';
import Home from './components/home-component';

function App() {
  return (
    <Router>
      <Navigationbar />
      <Jumbo />
      <Route path = "/" exact component = { Home } /> 
    </Router>
  );
}

export default App;
