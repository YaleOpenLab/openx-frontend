import React, { Component } from "react";
import "./ProfileComponent.scss";
import SubNavigationComponent from "../General/SubNavigationComponent/SubNavigationComponent";
import ROUTES from "../../routes/routes";
import { Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Settings/Settings";
import PrivateRoute from "../PrivateRouterComponent/PrivateRouterComponent";
import { Http } from "../../services/Http";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        // we can rediferct them to both and then check on that end, but that's not so nice for ux, so better to do it here
        { name: "dashboard", link: ROUTES.INVESTOR_PAGES.DASHBOARD },
        { name: "settings", link: ROUTES.PROFILE_PAGES.SETTINGS }
      ]
    };
  }

  componentDidMount = () => {
    let menu = [ ...this.state.menu ];
  };

  render() {
    return (
      <div className="Profile">
        <SubNavigationComponent list={this.state.menu} />
        <Switch>
          <Redirect
            from={ROUTES.PROFILE}
            exact
            to={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
          />
          <PrivateRoute
            path={ROUTES.PROFILE_PAGES.DASHBOARD}
            component={Dashboard}
          />
          <PrivateRoute
            path={ROUTES.PROFILE_PAGES.SETTINGS}
            component={Settings}
          />
        </Switch>
      </div>
    );
  }
}

export default ProfileComponent;
