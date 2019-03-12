import React from "react";

import { MDBNavItem } from "mdbreact";
import Button from "../../../UI/SolarForms/Button/Button";

const navigationItem = props => {
  let items = null;

  if (!props.type) {
    items = (
      <a
        className={`waves-effect waves-light ${
          props.divider ? "border-right" : null
        } `}
        href={props.link}
      >
        {props.children}
      </a>
    );
  } else {
    items = <Button link={props.link} name={props.children} />;
  }

  return <MDBNavItem>{items}</MDBNavItem>;
};

export default navigationItem;
