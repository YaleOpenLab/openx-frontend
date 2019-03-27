import React from "react";

import { MDBNavItem } from "mdbreact";

const navigationItem = props => {
  let items = null;
  if (!props.type) {
    items = (
      <a
        className={`anchor-nav-link-item ${props.divider ? "border-right" : ""} ${
          props.active ? "active-nav-item" : ""
        }`}
        href={props.link}
      >
        <MDBNavItem>{props.children}</MDBNavItem>
      </a>
    );
  } else {
    items = (
      <div className="solar-button-fixed-width">
        <button
          className="solar-form-button solar-btn-normal"
          link={props.link}
        >
          {props.children}
        </button>
      </div>
    );
  }

  return <React.Fragment>{items}</React.Fragment>;
};

export default navigationItem;
