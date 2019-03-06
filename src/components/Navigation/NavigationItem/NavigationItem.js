import React from "react";

import {
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

const navigationItem = props => {
  return (
    <MDBNavItem>
      <MDBNavLink className={`waves-effect waves-light ${props.divider ? "border-right" : null} `} to={props.link}>
        {props.children}
      </MDBNavLink>
    </MDBNavItem>
  );
};

export default navigationItem;
