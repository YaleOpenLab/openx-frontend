import React from "react";
import "./Button.scss";
import { NavLink } from "react-router-dom";

const Button = props => (
  <NavLink to={props.link}>
    <button
      className={"solar-button"}
      disabled={props.disabled ? true : false}
      style={props.style ? props.style : null}
    >
      {props.name}
    </button>
  </NavLink>
);

export default Button;
