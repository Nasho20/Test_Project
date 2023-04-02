import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "../reducers/auth";
import user from "../reducers/user";
import uiReducer from "../reducers/ui-reducer";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const middlewareEnhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({ reducer: { auth, user, ui: uiReducer } });

export default store;
