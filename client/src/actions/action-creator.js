import {
  FETCH_SONG,
  FETCH_SONGS,
  CREATE_SONG,
  UPDATE_SONG,
  DELETE_SONG,
} from './action-type';

export const fetchSong = () => ({
  type: FETCH_SONG,
});

export const fetchSongs = () => ({
  type: FETCH_SONGS,
});

export const createSong = () => ({
  type: CREATE_SONG,
});

export const updateSong = () => ({
  type: UPDATE_SONG,
});

export const deleteSong = () => ({
  type: DELETE_SONG,
});
