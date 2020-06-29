import React, { Component } from "react";
import "./Receiver.scss";
import { Switch, Redirect } from "react-router-dom";
import ROUTES from "../../routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Originate from "./Pages/Originate/Originate"
import PrivateRoute from "../PrivateRouterComponent/PrivateRouterComponent";

class ReceiverComponent extends Component {
  render() {
    return (
      <div className="ReceiverComponent">
        <Switch>
          <Redirect
            from={ROUTES.RECEIVER}
            exact
            to={ROUTES.RECEIVER_PAGES.DASHBOARD}
          />
          <PrivateRoute
            path={ROUTES.RECEIVER_PAGES.DASHBOARD}
            exact
            component={Dashboard}
          />
          <PrivateRoute
              path={ROUTES.RECEIVER_PAGES.ORIGINATE}
              exact
              component={Originate}
          />
        </Switch>
      </div>
    );
  }
}

export default ReceiverComponent;
