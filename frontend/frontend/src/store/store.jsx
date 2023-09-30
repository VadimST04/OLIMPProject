import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "../store/reducers/userReducers";
import { postsListReducer } from "../store/reducers/postsReducers";
import { userProfileReducer } from "../store/reducers/profileReducers";
import { newsListReducer } from "../store/reducers/newsReducers";

const reducer = combineReducers({
  userToken: userLoginReducer,
  postsList: postsListReducer,
  userProfile: userProfileReducer,
  newsList: newsListReducer,
});

const initialStore = {};

const middleware = [thunk];

export const store = configureStore(
  { reducer },
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);
