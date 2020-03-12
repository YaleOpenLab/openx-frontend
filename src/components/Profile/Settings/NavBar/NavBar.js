import React from "react";
import NavItem from "./NavItem/NavItem";
import ROUTES from "../../../../routes/routes";
import "./NavBar.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileImage from "../../../../assets/images/user-profile-icon.svg";

const NavBar = ({ account }) => (
  <div className="col-12 col-sm-4 col-lg-3">
    <div className="ProfileNavBar">
      <div className="profile-nav-info-section">
        <div className="proile-nav-image">
          <img src={ProfileImage} alt="user profile" />
        </div>
        <div className="profile-nav-user-name">{account.Name}</div>
      </div>
      <div className="profile-nav-menu-section">
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
          name="your profile"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY}
          name="security & preferences"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}
          name="your entity profile"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES}
          name="user setup"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS}
          name="manage funds"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL}
          name="legal requirements"
        />
      </div>
      <div className="profile-nav-progress-section">
        <div className="profile-progress-text">
          Your account setup progress:
        </div>
        <div className="profile-progress-percentage">
          {account.ProfileProgress}%
        </div>
        <div className="profile-progress-bar">
          <div
            className="profile-progress-success"
            style={{ width: `${account.ProfileProgress}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  account: state.profile.user.items,
  loading: state.profile.user.isLoading
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
