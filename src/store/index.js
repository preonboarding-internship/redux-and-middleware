// src/store/index.js

import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";

// make root reducer from slice reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// make store from reducers
const store = createStore(rootReducer);

export default store;
