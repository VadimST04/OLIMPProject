import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAIL,
  MUSIC_DETAILS_REQUEST,
  MUSIC_DETAILS_SUCCESS,
  MUSIC_DETAILS_FAIL,
  MUSIC_SEARCH,
} from "../constants/musicConstants";
import axios from "axios";

export const musicList = (learning_langs) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MUSIC_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: learning_langs?.at(0)
          ? `Bearer ${userToken.access}`
          : "",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      {
        learning_langs: learning_langs,
      },
      config,
    );

    dispatch({
      type: MUSIC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MUSIC_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const musicDetails = (musicId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MUSIC_DETAILS_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/music/${musicId}/`,
      config,
    );

    dispatch({
      type: MUSIC_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MUSIC_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const musicSearch = (query) => async (dispatch, getState) => {
  try {
    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/music/search?search=${query}`,
      config,
    );

    dispatch({
      type: MUSIC_SEARCH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MUSIC_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
