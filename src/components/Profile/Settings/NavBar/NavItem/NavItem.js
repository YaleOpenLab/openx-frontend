import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = props => {
  return (
    <NavLink to={props.link} activeClassName="is-active">
      <div className="ProfileNavItem">
        <span className="profile-menu-icon">icon</span>
        <div className="profile-menu-name">{props.name}</div>
      </div>
    </NavLink>
  );
};

export default NavItem;
