import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  BOOK_DETAUIL_REQUEST,
  BOOK_DETAUIL_SUCCESS,
  BOOK_DETAUIL_FAIL,
} from "../constants/booksConstants";
import axios from "axios";

export const booksList = (learning_langs) => async (dispatch) => {
  try {
    dispatch({
      type: BOOKS_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/books/view/",
      { learning_langs },
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

export const bookDetails = (bookId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOK_DETAUIL_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/books/view/${bookId}/`,
      config,
    );
    dispatch({
      type: BOOK_DETAUIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DETAUIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};
