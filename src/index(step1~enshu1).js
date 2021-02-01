import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import TopComponent from "./components/TopComponent";
import DetailComponent from "./components/DetailComponent";
import Enshu1A from "./components/Enshu1A";
import Enshu1B from "./components/Enshu1B";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/detail/:id" component={DetailComponent} />
      <Route path="/A" component={Enshu1A} />
      <Route path="/B" component={Enshu1B} />
      <Route exact path="/" component={TopComponent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
