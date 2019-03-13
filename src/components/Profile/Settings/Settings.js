import React, { Component } from "react";
import "./Settings.scss";
import NavBar from "./NavBar/NavBar";

class Settings extends Component {
  render() {
    return (
      <div className="ProfileSettings">
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col-12 col-sm-8  col-lg-9">content</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
