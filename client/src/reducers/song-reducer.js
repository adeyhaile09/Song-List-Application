import {
  FETCH_SONG,
  FETCH_SONGS,
  CREATE_SONG,
  UPDATE_SONG,
  DELETE_SONG,
} from './action-type';

export default (
  state = { data: {}, error: null, loading: false },
  { type, data, error }
) => {
  switch (type) {
    case FETCH_SONG:
      return { ...state, error: null, loading: true };
    case FETCH_SONGS:
      return { ...state, error: null, loading: true };
    default:
      return state;
  }
};
