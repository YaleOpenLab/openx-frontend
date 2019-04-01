import React from "react";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";

const LayoutHoc = props => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default LayoutHoc;