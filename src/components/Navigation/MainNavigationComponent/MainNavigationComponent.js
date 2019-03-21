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
  MDBDropdownItem
} from "mdbreact";
import Logo from "../../UI/Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";
import Routes from "../../../routes/routes";

class MainNavigationComponent extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="dark" className="main-navigation" expand="md">
        <MDBNavbarBrand>
          <Logo projectName="solar" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-md-inline">docs</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="/">page 1</MDBDropdownItem>
                  <MDBDropdownItem href="/">page 2</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <NavigationItem link={Routes.EXPLORE} active>
              Explore
            </NavigationItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <NavigationItem link={Routes.INVESTOR} active>
              Investor
            </NavigationItem>
            <NavigationItem link={Routes.RECEIVER}>Receiver</NavigationItem>
            <NavigationItem link={Routes.DEVELOPER} divider={true}>
              Developer
            </NavigationItem>
            <NavigationItem link={Routes.LOGIN}>Log in</NavigationItem>
            <NavigationItem link={Routes.SIGNUP}>Sign up</NavigationItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default MainNavigationComponent;
