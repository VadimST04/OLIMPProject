import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAIL,
} from "../constants/musicConstants";

export const musicListReducer = (state = {}, action) => {
  switch (action.type) {
    case MUSIC_REQUEST:
      return { loading: true };

    case MUSIC_SUCCESS:
      return { loading: false, music: action.payload };

    case MUSIC_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
