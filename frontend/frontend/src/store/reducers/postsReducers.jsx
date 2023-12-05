import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
  MY_POSTS_REQUEST,
  MY_POSTS_SUCCESS,
  MY_POSTS_FAIL,
  POSTS_CREATE_REQUEST,
  POSTS_CREATE_SUCCESS,
  POSTS_CREATE_FAIL,
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

export const myPostsListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case MY_POSTS_REQUEST:
      return { myPostsLoading: true };

    case MY_POSTS_SUCCESS:
      return { myPostsLoading: false, myPosts: action.payload };

    case MY_POSTS_FAIL:
      return { myPostsLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const postsCreate = (state = { comments: [] }, action) => {
  switch (action.type) {
    case POSTS_CREATE_REQUEST:
      return { loading: true };

    case POSTS_CREATE_SUCCESS:
      return { loading: false, posts: action.payload };

    case POSTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
