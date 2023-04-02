import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "../reducers/auth";
import user from "../reducers/user";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const middlewareEnhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({ reducer: { auth, user } });

export default store;
