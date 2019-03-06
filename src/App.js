import React, { Component } from 'react';
import Routes from './routes/routes';
import PrivateRoute from './components/PrivateRouterComponent/PrivateRouterComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingContainer from './containers/LandingContainer/LandingContainer';
import TestComponent from './containers/TestComponent/TestComponent';
import AuthPageContainer from './containers/AuthPageContainer/AuthPageContainer';
import NotFoundPageContainer from './containers/NotFoundPageContainer/NotFoundPageContainer';
import ExplorePageContainer from './containers/ExplorePageContainer/ExplorePageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
                <Switch>
                  <Route path={Routes.HOME} exact component={LandingContainer} />
                  <Route path={Routes.EXPLORE} component={ExplorePageContainer} />
                  <Route path={Routes.LOGIN} component={AuthPageContainer} />
                  <Route path={Routes.SIGNUP} component={AuthPageContainer} />
                  <PrivateRoute path={Routes.INVESTOR} authed={false} component={TestComponent} />
                  <PrivateRoute path={Routes.RECEIVER} authed={false} component={TestComponent} />
                  <PrivateRoute path={Routes.DEVELOPER} authed={false} component={TestComponent} />
                  <Route path='*' exact component={NotFoundPageContainer} />
                </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
