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
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import Legal from "./Pages/Legal/Legal";
import {validateAction} from "../store/actions";
import {Observable} from "rxjs";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Storage.get("username"),
      password: Storage.get("token")
    }
  }

  componentDidMount = () => {
		// function mockHTTPRequest(url) {
		// 	return Observable.of(`Response from ${url}`)
		// 		.delay(Math.random() * 1000);
		// }
		//
		// const urls = [
		// 	'http://api.openx.solar/user/validate?username=dog&token=hnnThoxcMQWiaezMoGJSQQHYemyEqVML',
		// 	'http://api.openx.solar/investor/validate?username=dog&token=hnnThoxcMQWiaezMoGJSQQHYemyEqVML',
		// 	'http://api.openx.solar/recipient/validate?username=dog&token=hnnThoxcMQWiaezMoGJSQQHYemyEqVML'];
		//
		// Observable.from(urls)
		// 	.concatMap(url => mockHTTPRequest(url))
		// 	.subscribe(val => console.log(val));

		this.props.fetchUser("investor", this.state.username);
		this.props.fetchUser("recipient", this.state.username);
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
	account: state.profile.user.items,
	loading: state.profile.user.isLoading,
	updateStatus: state.profile.user.updateStatus
});
const mapDispatchToProps = dispatch => ({
	fetchUser: (entity, username) => dispatch(validateAction(entity, username))
});

export default connect(
	mapStateToProps,mapDispatchToProps
)(withSnackbar(Settings));
