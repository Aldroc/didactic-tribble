import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navigationbar from './components/navbar-component';
import Jumbo from './components/jumbotron-component'

function App() {
  return (
    <Router>
      <Navigationbar />
      <Jumbo />
    </Router>
  );
}

export default App;
