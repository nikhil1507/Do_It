import React, { Fragment } from "react";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Todo from "./Pages/Todo";

export default function Main() {
  return (
    <Fragment>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Todo />
    </Fragment>
  );
}
