import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';

const Routes = () => (
  <main>
    {/* <Route exact path="/map" component={Map} /> */}
    <Route exact path="/map/about" component={About} />
  </main>
);

export default Routes;
