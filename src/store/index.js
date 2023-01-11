// src/store/index.js

import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./counter";
import { logger, thunk } from "./middleware";
import todoReducer from "./todo";

// make root reducer from slice reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// make store from reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
