import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAIL,
} from "../constants/musicConstants";
import axios from "axios";

export const musicList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MUSIC_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/music/",
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
