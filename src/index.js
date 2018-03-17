import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css'

const target = document.getElementById('root');

render(<App />, target);

registerServiceWorker();
