import React, { Component } from "react";
import "./Settings.scss";
import NavBar from "./NavBar/NavBar";
import { Switch, Redirect } from 'react-router-dom';
import ROUTES from '../../../routes/routes';
import Account from "./Pages/Account/Account";
import Security from "./Pages/Security/Security";
import Preferences from "./Pages/Preferences/Preferences";
import Entity from "./Pages/Entity/Entity";
import Profiles from "./Pages/Profiles/Profiles";
import PrivateRoute from "../../PrivateRouterComponent/PrivateRouterComponent";

class Settings extends Component {
  render() {
    return (
      <div className="ProfileSettings">
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col-12 col-sm-8 col-lg-9 settings-content">
              <Switch>
                <Redirect from={ROUTES.PROFILE_PAGES.SETTINGS} exact to={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS} exact component={Account} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT} component={Account} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY} component={Security} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE} component={Entity} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES} component={Profiles} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.PREFERENCES} component={Preferences} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;