import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_SEARCH,
} from "../constants/booksConstants";
import axios from "axios";

export const booksList = (learning_langs) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKS_REQUEST,
    });

    const { userToken } = getState().userToken;

    console.log("bookList action", learning_langs?.at(0));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: learning_langs?.at(0)
          ? `Bearer ${userToken.access}`
          : "",
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
      type: BOOK_DETAILS_REQUEST,
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
      type: BOOK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const booksSearch = (query) => async (dispatch, getState) => {
  try {

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/books/search?search=${query}`,
      config,
    );

    dispatch({
      type: BOOK_SEARCH,
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
