import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
} from "../constants/booksConstants";
import axios from "axios";

export const booksList = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOKS_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/books/view/",
      config,
    );

    dispatch({
      type: BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
