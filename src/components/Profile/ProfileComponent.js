import React, { Component } from "react";
import "./ProfileComponent.scss";
import SubNavigationComponent from "../General/SubNavigationComponent/SubNavigationComponent";
import ROUTES from "../../routes/routes";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Settings/Settings";
import PrivateRoute from "../PrivateRouterComponent/PrivateRouterComponent";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: "dashboard", link: ROUTES.INVESTOR_PAGES.DASHBOARD },
        { name: "settings", link: ROUTES.PROFILE_PAGES.SETTINGS }
      ]
    };
  }

  render() {
    return (
      <div className="Profile">
        <SubNavigationComponent list={this.state.menu} />
        <Switch>
          <PrivateRoute path={ROUTES.PROFILE_PAGES.DASHBOARD} component={Dashboard} />
          <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS} component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default ProfileComponent;
