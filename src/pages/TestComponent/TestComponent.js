import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";

class TestComponent extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content">Protected Page</div>
      </LayoutHoc>
    );
  }
}

export default TestComponent;
