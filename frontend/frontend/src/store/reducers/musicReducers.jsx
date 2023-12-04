import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAIL,
  MUSIC_DETAILS_REQUEST,
  MUSIC_DETAILS_SUCCESS,
  MUSIC_DETAILS_FAIL,
  MUSIC_SEARCH,
} from "../constants/musicConstants";

export const musicListReducer = (state = {}, action) => {
  switch (action.type) {
    case MUSIC_REQUEST:
      return { loading: true };

    case MUSIC_SUCCESS:
      return { loading: false, music: action.payload };

    case MUSIC_SEARCH:
      return { loading: false, music: action.payload };

    case MUSIC_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const musicDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case MUSIC_DETAILS_REQUEST:
      return { loading: true };

    case MUSIC_DETAILS_SUCCESS:
      return { loading: false, musicDetail: action.payload };

    case MUSIC_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
