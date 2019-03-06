import React from "react";
import "./Toolbar.scss";
import MainNavigationComponent from "../MainNavigationComponent/MainNavigationComponent";

const toolbar = props => (
  <header className="Toolbar">
      <MainNavigationComponent />
  </header>
);

export default toolbar;
