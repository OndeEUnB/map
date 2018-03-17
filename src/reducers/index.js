import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import map from './map';

export default combineReducers({
  map,
  routing: routerReducer
});
