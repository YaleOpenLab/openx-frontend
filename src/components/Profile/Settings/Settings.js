import React, { Component } from "react";
import "./Settings.scss";
import NavBar from "./NavBar/NavBar";
import { Switch, Route } from 'react-router-dom';
import ROUTES from '../../../routes/routes';
import Account from "./Pages/Account/Account";
import Security from "./Pages/Security/Security";
import Preferences from "./Pages/Preferences/Preferences";

class Settings extends Component {
  render() {
    return (
      <div className="ProfileSettings">
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col-12 col-sm-8 col-lg-9 settings-content">
              <Switch>
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS} exact component={Account} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT} component={Account} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY} component={Security} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE} component={Account} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES} component={Account} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.PREFERENCES} component={Preferences} />
                <Route path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL} component={Account} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;