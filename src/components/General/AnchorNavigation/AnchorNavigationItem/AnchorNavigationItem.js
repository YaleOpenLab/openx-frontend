import React from 'react';

import { MDBNavItem } from 'mdbreact';
import { Link } from 'react-router-dom';

const navigationItem = props => {
  let items = null;
  if (!props.type) {
    items = (
      <a
        className={`anchor-nav-link-item ${props.divider ? 'border-right' : ''} ${
          props.active ? 'active-nav-item' : ''
          }`}
        href={props.link}
      >
        <MDBNavItem>{props.children}</MDBNavItem>
      </a>
    );
  } else {
    items = (
      <div className="solar-button-fixed-width">
        <Link to={props.link}>
          <button
            className="solar-form-button solar-btn-normal"
            disabled={props.data && props.data.Stage && props.data.Stage > 4}
          >
            {props.children}
          </button>
        </Link>
      </div>
    );
  }

  return <React.Fragment>{items}</React.Fragment>;
};

export default navigationItem;
