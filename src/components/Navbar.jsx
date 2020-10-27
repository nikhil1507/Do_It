import React from "react";
import "../styles/main.scss";

export default function Navbar() {
  const links = [
    { id: 1, title: "Home" },
    { id: 2, title: "Login" },
    { id: 3, title: "Register" },
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
      </div>
      <ul className="navbar-nav">
        {links.map((i) => (
          <li key={i.id} className="nav-item">
            <a href="#" className="nav-link">
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
