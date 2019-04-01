import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import InvestorComponent from "../../components/Investor/Investor";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";
import MENU from "./constants";
class InvestorContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Investor">
          <SubNavigationComponent list={MENU} />
          <InvestorComponent />
        </div>
      </LayoutHoc>
    );
  }
}

export default InvestorContainer;
