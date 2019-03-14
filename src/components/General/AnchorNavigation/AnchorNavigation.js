import React, { Component } from "react";
import "./AnchorNavigation.scss";
import { MDBNavbar, MDBNavbarNav } from "mdbreact";
import AnchorNavigationItem from "./AnchorNavigationItem/AnchorNavigationItem";

class AnchorNavigation extends Component {
  navItems = null;

  render() {
    this.navItems = this.props.list.map(item => {
      return (
        <AnchorNavigationItem active={item.id === this.props.active} link={item.link} key={item.link} type={item.type}>
          {item.name}
        </AnchorNavigationItem>
      );
    });

    return (
      <MDBNavbar className="anchor-navbar" expand="md">
        <MDBNavbarNav>{this.navItems}</MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default AnchorNavigation;
