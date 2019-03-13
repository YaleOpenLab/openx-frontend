import React from "react";
import NavItem from "./NavItem/NavItem";

const NavBar = props => {
  return (
    <div className="col-12 col-sm-4 col-lg-3">
      <div className="ProfileNavBar">
        <div className="profile-nav-info-section">
          <div className="proile-nav-image" f>
            <img src="https://i1.rgstatic.net/ii/profile.image/722704944607235-1549317694495_Q512/Martin_Wainstein.jpg" alt="placeholder" />
          </div>
          <div className="profile-nav-user-name">Martin Wainstein</div>
        </div>
        <div className="profile-nav-menu-section">
            <NavItem link="/account" name="account" />
            <NavItem link="/account" name="security" />
            <NavItem link="/account" name="entity profile" />
            <NavItem link="/account" name="user profiles" />
            <NavItem link="/account" name="preferences" />
            <NavItem link="/account" name="legal" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
