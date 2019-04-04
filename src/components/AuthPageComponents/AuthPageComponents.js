import React from "react";
import "./AuthPageComponents.scss";
import Routes from "../../routes/routes";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent/LoginComponent";
import SignUpComponent from "./SignUpComponent/SignUpComponent";
import LogOutComponent from "./LogOutComponent/LogOutComponent";

const AuthPageComponents = props => (
  <div className="AuthPage">
    <div className="grey-bar" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-4 col-sm-2 col-2 auth-image" />
        <div className="col-lg-6 col-md-8 col-sm-10 col-10 auth-form">
          <div className="auth-form-container">
            <div className="row h-100">
              <Switch>
                <Route path={Routes.LOGIN} component={LoginComponent} />
                <Route path={Routes.SIGNUP} component={SignUpComponent} />
                <Route path={Routes.LOGOUT} component={LogOutComponent} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthPageComponents;
