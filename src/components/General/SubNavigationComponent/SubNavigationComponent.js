import React, { Component } from "react";
import "./SubNavigationComponent.scss";
import { MDBNavbar, MDBNavbarNav } from "mdbreact";
import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";

class SubNavigationComponent extends Component {
  navItems = null;

  render() {
    if (this.props.list) {
      this.navItems = this.props.list.map(item => {
        return (
          <NavigationItem link={item.link} key={item.link}>
            {item.name}
          </NavigationItem>
        );
      });
    }
    return (
      <MDBNavbar className="sub-navbar" dark expand="md">
        <MDBNavbarNav>{this.navItems}</MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default SubNavigationComponent;
