import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Clients from "./clients";
import Services from "./services";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/about" component={About} />
    <Route path="/clients" component={Clients} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;