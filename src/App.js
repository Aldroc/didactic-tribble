import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navigationbar from './components/navbar-component';

function App() {
  return (
    <Router>
      <Navigationbar />
    </Router>
  );
}

export default App;
