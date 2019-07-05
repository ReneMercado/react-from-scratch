import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducerExample from './store/reducers/reducer-example';
import usersReducer from './store/reducers/users';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduer = combineReducers({
    redExample: reducerExample,
    users: usersReducer,
});

const store = createStore(rootReduer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>);

ReactDOM.render(app,
  document.getElementById("root")
);

