import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
} from "../constants/newsConstants";
import axios from "axios";

export const newsList = (learning_langs) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/news/`,
      {
        learning_langs: learning_langs,
      },
      config,
    );

    dispatch({
      type: NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
