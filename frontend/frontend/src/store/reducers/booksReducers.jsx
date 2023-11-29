import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_SEARCH,
} from "../constants/booksConstants";

export const booksListReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return { loading: true };

    case BOOKS_SUCCESS:
      return { loading: false, books: action.payload };

    case BOOK_SEARCH:
      return { loading: false, books: action.payload };

    case BOOKS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const booksDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return { loading: true };

    case BOOK_DETAILS_SUCCESS:
      return { loading: false, book: action.payload };

    case BOOK_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
