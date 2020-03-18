import React, { useEffect, useState } from "react";
import "./Settings.scss";
import NavBar from "./NavBar/NavBar";
import { Switch, Redirect } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import Account from "./Pages/Account/Account";
import Security from "./Pages/Security/Security";
import ManageFunds from "./Pages/ManageFunds/ManageFunds";
import Entity from "./Pages/Entity/Entity";
import Profiles from "./Pages/Profiles/Profiles";
import PrivateRoute from "../../PrivateRouterComponent/PrivateRouterComponent";
import Storage from "../../../services/Storage";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Legal from "./Pages/Legal/Legal";
import { validateAction, validateEntityAction } from "../store/actions";

const Settings = ({
  investorCreated,
  recipientCreated,
  developerCreated,
  fetchUser,
  fetchEntityUser,
  account,
  roles
}) => {
  const [username] = useState(Storage.get("username"));
  const [password] = useState(Storage.get("password"));

  useEffect(() => {
    fetchUser("investor", username);
  }, [investorCreated, account, roles.Investor]);

  useEffect(() => {
    fetchUser("recipient", username);
  }, [recipientCreated, account, roles.Recipient]);

  useEffect(() => {
    fetchEntityUser(username);
  }, [developerCreated, account]);

  return (
    <div className="ProfileSettings">
      <div className="container">
        <div className="row">
          <NavBar />
          <div className="col-12 col-sm-8 col-lg-9 settings-content">
            <Switch>
              <Redirect
                from={ROUTES.PROFILE_PAGES.SETTINGS}
                exact
                to={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS}
                exact
                component={Account}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
                component={Account}
                username={username}
                password={password}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY}
                component={Security}
                username={username}
                password={password}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}
                component={Entity}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES}
                component={Profiles}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS}
                component={ManageFunds}
              />
              <PrivateRoute
                path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL}
                component={Legal}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  roles: state.profile.roles,
  account: state.profile.user.items,
  investorCreated: state.profile.investor.created,
  recipientCreated: state.profile.recipient.created,
  developerCreated: state.profile.entity.created,
  loading: state.profile.user.isLoading,
  updateStatus: state.profile.user.updateStatus
});
const mapDispatchToProps = dispatch => ({
  fetchUser: (entity, username) => dispatch(validateAction(entity, username)),
  fetchEntityUser: username => dispatch(validateEntityAction(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Settings));
