import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login/login";
// import './Mock/index'

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/logined" component={App} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
