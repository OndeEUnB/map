import React from 'react';
import {  Link } from 'react-router-dom';
import Routes from '../routes';

const App = () => (
  <div>
    <div>
      <Link to="/map">Home</Link>
      <Link to="/map/about">About</Link>
    </div>

    <Routes />
  </div>
);

export default App;
