import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./feature/counter/reducer";

// Menggabungkan reducer menjadi satu root reducer
const rootReducer = combineReducers({
  counter: counterReducer
});

// Menerapkan Redux DevTools extension dan middleware redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

// Membuat Redux store
const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
