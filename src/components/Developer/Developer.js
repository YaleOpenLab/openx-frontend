import React, { Component } from "react";
import "./Developer.scss";
import { Switch, Redirect } from "react-router-dom";
import ROUTES from "../../routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRouterComponent/PrivateRouterComponent";

class DeveloperComponent extends Component {
    render() {
        return (
            <div className="ReceiverComponent">
                <Switch>
                    <Redirect
                        from={ROUTES.DEVELOPER}
                        exact
                        to={ROUTES.DEVELOPER_PAGES.DASHBOARD}
                    />
                    <PrivateRoute
                        path={ROUTES.DEVELOPER_PAGES.DASHBOARD}
                        exact
                        component={Dashboard}
                    />
                </Switch>
            </div>
        );
    }
}

export default DeveloperComponent;
