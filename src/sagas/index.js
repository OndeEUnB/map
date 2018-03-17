import { all } from 'redux-saga/effects';
import map from './map';

function* root() {
  yield all([
    map()
  ]);
}

export default root;
