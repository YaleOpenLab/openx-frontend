import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthorized from '../../helpers/functions/is-authorized';

export default function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => isAuthorized()
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}
  