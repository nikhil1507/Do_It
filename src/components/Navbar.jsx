import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/main.scss";

export default function Navbar() {
  const links = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Login", link: "/login" },
    { id: 3, title: "Register", link: "/register" },
    { id: 4, title: "Todo", link: "/add" },
  ];
  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
      <div style={{ display: "flex", flex: 1 }} className="navbar-brand">
        <a href="#">
          <i
            className="fa fa-check-square-o"
            style={{
              fontSize: "50px",
              color: "#373a40",
            }}
          ></i>
        </a>
        <button
          style={{ position: "absolute", right: 0 }}
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        style={{ position: "absolute", right: 0 }}
        className="navbar-collapse collapse"
      >
        <ul className="navbar-nav">
          {links.map((i) => (
            <li key={i.id} className="nav-item">
              <NavLink className=" nav-link" to={i.link}>
                {i.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
