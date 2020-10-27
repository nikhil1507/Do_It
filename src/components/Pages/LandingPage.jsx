import React from "react";
import "../../styles/main.scss";
import HeroButton from "../HeroButton";

export default function LandingPage() {
  return (
    <div className="hero">
      <h1>Manage Your Day with Do It</h1>
      <p>
        With our web based to do app you can access your tasks from anywhere in
        the world
      </p>
      <HeroButton title="Explore! " />
    </div>
  );
}
