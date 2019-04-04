import React, { Component } from "react";
import "./MainNavigationComponent.scss";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import Logo from "../../UI/Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";
import Routes from "../../../routes/routes";
import isAuthorized from "../../../helpers/functions/is-authorized";
import UserProfileSection from "./UserProfileSection/UserProfileSection";

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
            <NavigationItem link={Routes.ABOUT}>About</NavigationItem>
            <NavigationItem link={Routes.EXPLORE}>Explore</NavigationItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <NavigationItem link={Routes.INVESTOR}>Investor</NavigationItem>
            <NavigationItem link={Routes.RECEIVER}>Receiver</NavigationItem>
            <NavigationItem link={Routes.DEVELOPER} divider={true}>
              Developer
            </NavigationItem>
            {isAuthorized() ? (
              <UserProfileSection />
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
