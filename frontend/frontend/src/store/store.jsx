import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "../store/reducers/userReducers";

const reducer = combineReducers({
  userInfo: userLoginReducer,
});

const initialStore = {};

const middleware = [thunk];

export const store = configureStore(
  { reducer },
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);