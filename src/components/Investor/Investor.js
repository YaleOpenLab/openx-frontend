import React, { Component } from "react";
import "./Investor.scss";
import { Switch, Redirect } from "react-router-dom";
import ROUTES from "../../routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRouterComponent/PrivateRouterComponent";
import InvestmentConfirmation from "./Pages/InvestmentConfirmation/InvestmentConfirmation";

class InvestorComponent extends Component {
  render() {
    return (
      <div className="InvestorComponent">
        <Switch>
          <Redirect
            from={ROUTES.INVESTOR}
            exact
            to={ROUTES.INVESTOR_PAGES.DASHBOARD}
          />
          <PrivateRoute
            path={ROUTES.INVESTOR_PAGES.DASHBOARD}
            exact
            component={Dashboard}
          />
          <PrivateRoute
            path={ROUTES.INVESTOR_PAGES.CONFIRMATION}
            exact
            component={InvestmentConfirmation}
          />
        </Switch>
      </div>
    );
  }
}

export default InvestorComponent;
