import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";
import DeveloperComponent from "../../components/Developer/Developer";

class DeveloperContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Developer">
          <SubNavigationComponent />
          <DeveloperComponent />
        </div>
      </LayoutHoc>
    );
  }
}

export default DeveloperContainer;
