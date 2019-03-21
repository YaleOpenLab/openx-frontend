import React, { Component } from "react";
import Routes from "./routes/routes";
import PrivateRoute from "./components/PrivateRouterComponent/PrivateRouterComponent";
import { Switch, Route } from "react-router-dom";
import LandingContainer from "./pages/LandingContainer/LandingContainer";
import TestComponent from "./pages/TestComponent/TestComponent";
import AuthPageContainer from "./pages/AuthPageContainer/AuthPageContainer";
import NotFoundPageContainer from "./pages/NotFoundPageContainer/NotFoundPageContainer";
import ExploreContainer from "./pages/Explore/ExploreContainer";
import InvestorContainer from "./pages/Investor/InvestorContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={Routes.HOME} exact component={LandingContainer} />
        <Route path={Routes.EXPLORE} component={ExploreContainer} />
        <Route path={Routes.PROJECT} component={ExploreContainer} />
        <Route path={Routes.LOGIN} component={AuthPageContainer} />
        <Route path={Routes.SIGNUP} component={AuthPageContainer} />
        <Route path={Routes.LOGOUT} component={AuthPageContainer} />
        <PrivateRoute path={Routes.PROFILE} component={ProfileContainer} />
        <PrivateRoute path={Routes.INVESTOR} component={InvestorContainer} />
        <PrivateRoute path={Routes.RECEIVER} component={TestComponent} />
        <PrivateRoute path={Routes.DEVELOPER} component={TestComponent} />
        <Route path="*" exact component={NotFoundPageContainer} />
      </Switch>
    );
  }
}

export default App;
