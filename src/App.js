import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import router from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return <Provider store={store}>{router()}</Provider>;
}
export default App;
