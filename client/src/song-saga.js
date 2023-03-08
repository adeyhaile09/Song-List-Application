import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_CAT } from './consts';
import { receiveCatSuccess, receiveCatFailure } from './actions';
import axios from 'axios';

function* onFetchSong() {
  try {
    const response = yield call(axios.get, [
      'https://api.thecatapi.com/v1/images/search',
    ]);
    yield put(receiveCatSuccess(response.data[0]));
  } catch (e) {
    yield put(receiveCatFailure(e));
  }
}

export function* fetchSongSaga() {
  yield takeLatest(FETCH_CAT, onFetchSong);
}
