import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
  </Switch>
)

export default Main;