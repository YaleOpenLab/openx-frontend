import React, { Component } from 'react';
import './AnchorNavigation.scss';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler
} from 'mdbreact';
import AnchorNavigationItem from './AnchorNavigationItem/AnchorNavigationItem';

class AnchorNavigation extends Component {
  navItems = null;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    this.navItems = this.props.list.map(item => {
      return (
        <AnchorNavigationItem
          active={item.id === this.props.active}
          link={item.link}
          key={item.link}
          type={item.type}
        >
          {item.name}
        </AnchorNavigationItem>
      );
    });

    return (
      <MDBNavbar className="anchor-navbar" expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} className="annchor-toggle-icon"/>
        <div className="container anchor-cont">
          <div className="anchor-row">
            <MDBCollapse isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav>{this.navItems}</MDBNavbarNav>
            </MDBCollapse>
          </div>
        </div>
      </MDBNavbar>
    );
  }
}

export default AnchorNavigation;
