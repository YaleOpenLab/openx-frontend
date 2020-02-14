import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";

class NotFoundPageContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="component-content">
          <div>404 - Page Not Found</div>
        </div>
      </LayoutHoc>
    );
  }
}

export default NotFoundPageContainer;
