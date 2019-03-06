import React from 'react';
import './AuthPageComponents.scss';
import Routes from '../../routes/routes';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent/LoginComponent';
import SignUpComponent from './SignUpComponent/SignUpComponent';

const authPageComponents = props => {
    return (
        <div className="auth-page">
            <div className="comp">
            <div className="col-md-6 col-xs-12 auth-image" />
            <div className="col-md-6 col-xs-12 auth-form">
                <div className="col-xs-10 col-md-7 col-lg-5">
                <div className="flex-column">
                    <div className="flex-column align-end">
                        <h1 className="title">Open Solar</h1>
                    </div>
                    <Switch>
                        <Route path={Routes.LOGIN} component={LoginComponent} />
                        <Route path={Routes.SIGNUP} component={SignUpComponent} />
                    </Switch>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default authPageComponents;