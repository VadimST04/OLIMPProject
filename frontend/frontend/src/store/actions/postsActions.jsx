import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
  MY_POSTS_REQUEST,
  MY_POSTS_SUCCESS,
  MY_POSTS_FAIL,
} from "../constants/postsConstants";
import axios from "axios";

export const postsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POSTS_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/posts/",
      config,
    );

    dispatch({
      type: POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const myPostsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MY_POSTS_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/posts/mypost/",
      config,
    );

    dispatch({
      type: MY_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MY_POSTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
