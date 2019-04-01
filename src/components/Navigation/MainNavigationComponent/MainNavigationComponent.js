import React, { Component } from "react";
import "./MainNavigationComponent.scss";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBNavLink
} from "mdbreact";
import Logo from "../../UI/Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";
import Routes from "../../../routes/routes";
import isAuthorized from "../../../helpers/functions/is-authorized";

class MainNavigationComponent extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <MDBNavbar color="dark" className="main-navigation" expand="md">
        <MDBNavbarBrand>
          <Logo projectName="solar" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse
          id="navbarCollapse3"
          className="main-nav-menu"
          isOpen={this.state.isOpen}
          navbar
        >
          <MDBNavbarNav left>
            <MDBNavItem className="nav-item-dropdown">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-md-inline">docs</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBNavLink to={Routes.ABOUT} activeClassName="is-active">
                    About
                  </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <NavigationItem link={Routes.EXPLORE}>Explore</NavigationItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <NavigationItem link={Routes.INVESTOR}>Investor</NavigationItem>
            <NavigationItem link={Routes.RECEIVER}>Receiver</NavigationItem>
            <NavigationItem link={Routes.DEVELOPER} divider={true}>
              Developer
            </NavigationItem>
            {isAuthorized() ? (
              <div className="profile-nav-box">
                <MDBNavItem className="profile-nav-container nav-item-dropdown">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-md-inline">User Name</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBNavLink
                        to={Routes.PROFILE}
                        activeClassName="is-active"
                      >
                        profile
                      </MDBNavLink>
                      <MDBNavLink
                        to={Routes.LOGOUT}
                        activeClassName="is-active"
                      >
                        log out
                      </MDBNavLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <div className="profile-nav-avatar">
                  <img
                    src="https://i1.rgstatic.net/ii/profile.image/722704944607235-1549317694495_Q512/Martin_Wainstein.jpg"
                    alt="user profile"
                  />
                </div>
              </div>
            ) : (
              <React.Fragment>
                <NavigationItem link={Routes.LOGIN}>Log in</NavigationItem>
                <NavigationItem link={Routes.SIGNUP}>Sign up</NavigationItem>
              </React.Fragment>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default MainNavigationComponent;
