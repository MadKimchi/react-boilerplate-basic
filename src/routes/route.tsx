import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ServiceContext } from '../core';
import { IRoutePropsWithAuth } from './routes.interface';

// TODO: make this code more modular and create interface for whatever additional properties required.
/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
export function RouteWithSubRoutes(route: IRoutePropsWithAuth) {
  const { isLoggedIn } = useContext(ServiceContext).authService;

  if (!!route.requireAuth && !isLoggedIn) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      // render={props => route.component}
    />
  );
}
