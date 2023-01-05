import React from "react";
import Logo from "../logo.svg";

export default function Navbat() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="react logo" />
      <h3>ReactFacts</h3>
      <h4>Basic React Project</h4>
    </nav>
  );
}
