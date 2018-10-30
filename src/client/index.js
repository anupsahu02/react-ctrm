import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, browserHistory } from "react-router-dom";
import App from "./App";
import Login from "./component/login/login";
import newFuture from "./component/derivatives/future/new";
import listing from "./component/derivatives/future/list";
import Navbar from "./component/navbar";
import Header from "./component/header";

import jQuery from "jquery";
import "popper.js";

window.jQuery = window.$ = jQuery;
import "../../public/app-assets/vendors/js/ui/jquery.sticky.js";
import "../../public/app-assets/vendors/js/vendors.min.js";
// eslint-disable-next-line
import "../../public/app-assets/js/core/app-menu.js";
// eslint-disable-next-line
import "../../public/app-assets/js/core/app.js";

ReactDOM.render(
  <HashRouter history={browserHistory}>
    <Switch>
      <Route path="/derivative/new" exact component={newFuture} />
      <Route path="/derivative/" exact component={listing} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
