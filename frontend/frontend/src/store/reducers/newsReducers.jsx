import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAIL,
  } from "../constants/newsConstants";
  
  export const newsListReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case NEWS_REQUEST:
        return { loading: true };
  
      case NEWS_SUCCESS:
        return { loading: false, news: action.payload };
  
      case NEWS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  