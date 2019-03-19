import React from "react";

import { MDBNavItem } from "mdbreact";

const navigationItem = props => {
  let items = null;
  if (!props.type) {
    items = (
      <a
        className={`waves-effect waves-light ${
          props.divider ? "border-right" : ""
        } ${props.active ? "active-nav-item" : ""}`}
        href={props.link}
      >
        {props.children}
      </a>
    );
  } else {
    items = <div className="solar-button-fixed-width"><button className="solar-form-button solar-btn-normal" link={props.link} >{props.children}</button></div>;
  }

  return <MDBNavItem>{items}</MDBNavItem>;
};

export default navigationItem;
