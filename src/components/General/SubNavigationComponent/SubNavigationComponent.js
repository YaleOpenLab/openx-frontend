import React, { Component } from "react";
import "./SubNavigationComponent.scss";
import { MDBNavbar, MDBNavbarNav } from "mdbreact";
import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";
import PropTypes from 'prop-types';

class SubNavigationComponent extends Component {
  navItems = null;
  state = {
    isOpen: false
  };

  navItems = this.props.list.map(item => {
    return <NavigationItem link={item.link} key={item.link}>{item.name}</NavigationItem>
  });

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="sub-navbar" dark expand="md">
        <MDBNavbarNav>
          {this.navItems}
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

SubNavigationComponent.propTypes = {
  list: PropTypes.array.isRequired,
}

export default SubNavigationComponent;
