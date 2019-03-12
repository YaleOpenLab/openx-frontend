import React from "react";
import "./Button.scss";
import { NavLink } from "react-router-dom";

const Button = props => (
  <NavLink to={props.link}>
    <button className="solar-button">{props.name}</button>
  </NavLink>
);

export default Button;
