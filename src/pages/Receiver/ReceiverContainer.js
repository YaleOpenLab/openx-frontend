import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import ReceiverComponent from "../../components/Receiver/Receiver";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";
import MENU from "./constants";

class ReceiverContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Receiver">
          <SubNavigationComponent list={MENU} />
          <ReceiverComponent />
        </div>
      </LayoutHoc>
    );
  }
}

export default ReceiverContainer;
