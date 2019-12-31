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
import Storage from "../../../services/Storage";
import {fetchUserAccount} from "../store/actions";
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import Legal from "./Pages/Legal/Legal";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Storage.get("username"),
      password: Storage.get("token")
    }
  }

  componentDidMount = () => {
	};

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
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT} component={Account} username={this.state.username} password={this.state.password} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY} component={Security} username={this.state.username} password={this.state.password} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE} component={Entity} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES} component={Profiles} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS} component={Preferences} />
                <PrivateRoute path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL} component={Legal} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	account: state.profile.account.items,
	loading: state.profile.account.isLoading,
	updateStatus: state.profile.account.updateStatus
});

const mapDispatchToProps = dispatch => ({
	fetchUserAccount: payload => dispatch(fetchUserAccount(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withSnackbar(Settings));
