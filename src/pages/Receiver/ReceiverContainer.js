import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import ReceiverComponent from "../../components/Receiver/ReceiverComponent";

class ReceiverContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content Receiver">
          <ReceiverComponent />
        </div>
      </LayoutHoc>
    );
  }
}

export default ReceiverContainer;
