import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../components/login";
import Dashboard from "../pages/dashboard";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Dashboard} />
  </Switch>
);

export default Routes;
