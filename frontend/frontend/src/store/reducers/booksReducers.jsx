import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  BOOK_DETAUIL_REQUEST,
  BOOK_DETAUIL_SUCCESS,
  BOOK_DETAUIL_FAIL,
} from "../constants/booksConstants";

export const booksListReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return { loading: true };

    case BOOKS_SUCCESS:
      return { loading: false, books: action.payload };

    case BOOKS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const booksDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DETAUIL_REQUEST:
      return { loading: true };

    case BOOK_DETAUIL_SUCCESS:
      return { loading: false, book: action.payload };

    case BOOK_DETAUIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
