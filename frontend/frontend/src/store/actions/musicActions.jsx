import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAIL,
} from "../constants/musicConstants";
import axios from "axios";

export const musicList = (learning_langs) => async (dispatch) => {
  try {
    dispatch({
      type: MUSIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
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
