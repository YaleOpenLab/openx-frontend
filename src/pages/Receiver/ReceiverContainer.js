import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import ReceiverComponent from "../../components/Receiver/ReceiverComponent";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";

class ReceiverContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Receiver">
          <SubNavigationComponent />
          <ReceiverComponent />
        </div>
      </LayoutHoc>
    );
  }
}

export default ReceiverContainer;
