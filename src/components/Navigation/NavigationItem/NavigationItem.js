import React from "react";

import { MDBNavItem, MDBNavLink } from "mdbreact";

const navigationItem = props => (
  <MDBNavItem className={props.divider ? "border-right" : ""}>
    <MDBNavLink
      activeClassName="is-active"
      className={`waves-effect waves-light ${
        props.diffClass ? props.diffClass : ""
      }`}
      to={props.link}
    >
      {props.children}
    </MDBNavLink>
  </MDBNavItem>
);

export default navigationItem;
