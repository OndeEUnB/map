import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { buildMap } from '../helpers/map';

function* createMap() {
  try {
    const map = yield call(buildMap);
    yield put(actions.mapCreated(map));
  } catch (error) {
    yield put(actions.createMapFailed(error.message));
  }
}

function* watchCreateMap() {
  yield takeLatest('CREATE_MAP', createMap);
}

export default function* root() {
  yield all([
    watchCreateMap()
  ]);
}
