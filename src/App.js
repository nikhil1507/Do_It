import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import "../src/styles/main.scss";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
