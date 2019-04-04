import React from "react";
import NavItem from "./NavItem/NavItem";
import ROUTES from "../../../../routes/routes";
import "./NavBar.scss";
import { connect } from "react-redux";
import { fetchUserAccount } from "../../store/actions";
import { withRouter } from "react-router-dom";

const NavBar = props => (
  <div className="col-12 col-sm-4 col-lg-3">
    <div className="ProfileNavBar">
      <div className="profile-nav-info-section">
        <div className="proile-nav-image">
          <img
            src="https://i1.rgstatic.net/ii/profile.image/722704944607235-1549317694495_Q512/Martin_Wainstein.jpg"
            alt="placeholder"
          />
        </div>
        <div className="profile-nav-user-name">{props.account.Name}</div>
      </div>
      <div className="profile-nav-menu-section">
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
          name="account"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY}
          name="security"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}
          name="entity profile"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES}
          name="user profiles"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.PREFERENCES}
          name="preferences"
        />
        <NavItem
          link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL}
          name="legal"
        />
      </div>
      <div className="profile-nav-progress-section">
        <div className="profile-progress-text">
          Your account setup progress:
        </div>
        <div className="profile-progress-percentage">45%</div>
        <div className="profile-progress-bar">
          <div className="profile-progress-success" style={{ width: "45%" }} />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  account: state.profile.account.items,
  loading: state.profile.account.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserAccount: payload => dispatch(fetchUserAccount(payload))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
