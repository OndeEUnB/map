import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../components/About';
import Map from '../components/Map';

const App = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>

    <main>
      <Route exact path="/" component={Map} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
