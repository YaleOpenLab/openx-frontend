import React from "react";
import { NavLink } from "react-router-dom";
import { MDBNavItem } from "mdbreact";

const navigationItem = props => (
  <React.Fragment>
    <NavLink
      activeClassName="is-active"
      className={`navigation-link ${props.diffClass ? props.diffClass : ""}`}
      to={props.link}
    >
      <MDBNavItem>{props.children}</MDBNavItem>
    </NavLink>
    {props.divider ? <div className="nav-border-diveider" /> : ""}
  </React.Fragment>
);

export default navigationItem;
