import {
  LANGUAGES_REQUEST,
  LANGUAGES_SUCCESS,
  LANGUAGES_FAIL,
} from "../constants/languagesConstants";

export const languagesListReducer = (state = {}, action) => {
  switch (action.type) {
    case LANGUAGES_REQUEST:
      return { loading: true };

    case LANGUAGES_SUCCESS:
      return { loading: false, languages: action.payload };

    case LANGUAGES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
