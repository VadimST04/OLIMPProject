import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_LOGOUT,
  CHANGE_SELECTED_LANGUAGES,
} from "../constants/profileConstants";

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, userProfile: action.payload };

    case CHANGE_SELECTED_LANGUAGES:
      return { loading: false, userProfile: action.payload };

    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
