// src/store/index.js

import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";

// slice reducer -> combineReducers -> root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

// root reducer -> createStore -> store
const store = createStore(rootReducer);

// export
export default store;
