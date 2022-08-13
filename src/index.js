import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import appStore from "./stateManagement/appStore";
import axios from "axios";

//axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api";
// <BrowserRouter>
ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
