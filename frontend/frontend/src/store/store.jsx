import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userListReducer,
} from "../store/reducers/userReducers";
import { postsListReducer } from "../store/reducers/postsReducers";
import { userProfileReducer } from "../store/reducers/profileReducers";
import { newsListReducer } from "../store/reducers/newsReducers";
import { musicListReducer } from "../store/reducers/musicReducers";
import { mainButtonReducer } from "../store/reducers/buttonsReducers";
import { signInFormToggler } from "../store/reducers/formsReducers";
import { booksListReducer } from "../store/reducers/booksReducers";
import { languagesListReducer } from "../store/reducers/languagesReducers";

const reducer = combineReducers({
  userToken: userLoginReducer,
  usersList: userListReducer,
  languagesList: languagesListReducer,
  postsList: postsListReducer,
  musicList: musicListReducer,
  userProfile: userProfileReducer,
  newsList: newsListReducer,
  booksList: booksListReducer,

  formIsOpen: signInFormToggler,
  mainButtonName: mainButtonReducer,
});

const initialStore = {};

const middleware = [thunk];

export const store = configureStore(
  { reducer },
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);
