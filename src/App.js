import React, { Component } from "react";
import Routes from "./routes/routes";
import PrivateRoute from "./components/PrivateRouterComponent/PrivateRouterComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingContainer from "./pages/LandingContainer/LandingContainer";
import TestComponent from "./pages/TestComponent/TestComponent";
import AuthPageContainer from "./pages/AuthPageContainer/AuthPageContainer";
import NotFoundPageContainer from "./pages/NotFoundPageContainer/NotFoundPageContainer";
import ExploreContainer from "./pages/Explore/ExploreContainer";
import InvestorContainer from "./pages/Investor/InvestorContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={Routes.HOME} exact component={LandingContainer} />
          <Route path={Routes.EXPLORE} component={ExploreContainer} />
          <Route path={Routes.PROJECT} component={ExploreContainer} />
          <Route path={Routes.LOGIN} component={AuthPageContainer} />
          <Route path={Routes.SIGNUP} component={AuthPageContainer} />
          <PrivateRoute
            path={Routes.INVESTOR}
            authed={true}
            component={InvestorContainer}
          />
          <PrivateRoute
            path={Routes.RECEIVER}
            authed={false}
            component={TestComponent}
          />
          <PrivateRoute
            path={Routes.DEVELOPER}
            authed={false}
            component={TestComponent}
          />
          <Route path="*" exact component={NotFoundPageContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
