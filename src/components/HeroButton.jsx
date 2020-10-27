import React from "react";
import "../styles/main.scss";

export default function HeroButton({ title }) {
  return (
    <div className="hero-button">
      <p>{title}</p>
    </div>
  );
}
