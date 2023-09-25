import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
} from "../constants/postsConstants";

export const postsListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { loading: true };

    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload };

    case POSTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
