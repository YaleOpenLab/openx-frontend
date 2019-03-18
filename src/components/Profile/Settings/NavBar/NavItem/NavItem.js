import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = props => (
  <NavLink to={props.link} activeClassName="is-active">
    <div className="ProfileNavItem">
      <div className="profile-menu-icon ">
        <div className="profile-settings-icon" />
      </div>
      <div className="profile-menu-name">{props.name}</div>
    </div>
  </NavLink>
);

export default NavItem;
