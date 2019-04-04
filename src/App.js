import React, { Component } from "react";
import Routes from "./routes/routes";
import PrivateRoute from "./components/PrivateRouterComponent/PrivateRouterComponent";
import { Switch, Route } from "react-router-dom";
import LandingContainer from "./pages/LandingContainer/LandingContainer";
import AuthPageContainer from "./pages/AuthPageContainer/AuthPageContainer";
import NotFoundPageContainer from "./pages/NotFoundPageContainer/NotFoundPageContainer";
import ExploreContainer from "./pages/Explore/ExploreContainer";
import InvestorContainer from "./pages/Investor/InvestorContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import ReceiverContainer from "./pages/Receiver/ReceiverContainer";
import AboutContainer from "./pages/About/AboutContainer";
import DeveloperContainer from "./pages/Developer/DeveloperContainer";
import AccessDemo from "./components/AccessDemo/AccessDemo";
import Storage from './services/Storage';
import UnderDevelopmentPage from './pages/UnderDevelopmentPage/DeveloperContainer';


class App extends Component {
  state = {
    displayDemo: !localStorage.getItem("access-granted")
  };

  checkAccess = value => {
    this.setState({ displayDemo: !value });
  };

  render() {
    Storage.clearIfRequired();

    if (this.state.displayDemo) {
      return <AccessDemo grantAccess={this.checkAccess} />;
    }

    return (
      <Switch>
        <Route path={Routes.HOME} exact component={LandingContainer} />
        <Route path={Routes.ABOUT} component={AboutContainer} />
        <Route path={Routes.EXPLORE} component={ExploreContainer} />
        <Route path={Routes.PROJECT} component={ExploreContainer} />
        <Route path={Routes.LOGIN} component={AuthPageContainer} />
        <Route path={Routes.SIGNUP} component={AuthPageContainer} />
        <Route path={Routes.LOGOUT} component={AuthPageContainer} />
        <PrivateRoute path={Routes.PROFILE} component={ProfileContainer} />
        <PrivateRoute path={Routes.INVESTOR} component={InvestorContainer} />
        <PrivateRoute path={Routes.RECEIVER} component={ReceiverContainer} />
        <PrivateRoute path={Routes.DEVELOPER} component={DeveloperContainer} />
        <Route path={Routes.DEVELOPMENT} exact component={UnderDevelopmentPage} />
        <Route path="*" exact component={NotFoundPageContainer} />
      </Switch>
    );
  }
}

export default App;
