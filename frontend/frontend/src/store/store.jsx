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

const reducer = combineReducers({
  userToken: userLoginReducer,
  postsList: postsListReducer,
  userProfile: userProfileReducer,
});

const initialStore = {};

const middleware = [thunk];

export const store = configureStore(
  { reducer },
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);
