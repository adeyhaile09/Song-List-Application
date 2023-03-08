import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import song from './reducer/song-reducer';
import { fetchSongSaga } from './song-saga';

function* saga() {
  yield all([fetchSongSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  song,
});

export default createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);
