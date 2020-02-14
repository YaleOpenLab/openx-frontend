import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import AuthPageComponents from "../../components/AuthPageComponents/AuthPageComponents";

class AuthPageContainer extends Component {
  render() {
    return (
      <LayoutHoc>
        <AuthPageComponents />
      </LayoutHoc>
    );
  }
}

export default AuthPageContainer;
