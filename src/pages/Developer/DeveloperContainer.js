import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";
import UnderDevelopment from "../../components/General/UnderDevelopment/UnderDevelopment";

class DeveloperContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Developer">
        <SubNavigationComponent />
        <UnderDevelopment />
        </div>
      </LayoutHoc>
    );
  }
}

export default DeveloperContainer;
