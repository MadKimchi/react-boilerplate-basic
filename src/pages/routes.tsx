import React, { useContext } from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';

import { ServiceContext } from '../core/contexts/service.context';
import { RouteEnum } from '../core/enums';

import LoginPage from './login-page/login-page.component';
import TeamPage from './team-page/team-page.component';
import NotFoundPage from './not-found-page/not-found-page.component';
import TestPage from './test-page/test-page.component';
import Test2Page from './test-2-page/test-2-page.component';

interface IRoutePropsWithAuth extends RouteProps {
  requireAuth?: boolean;
}

// TODO: add nested routing
const Routes: IRoutePropsWithAuth[] = [
  {
    path: '/',
    exact: true,
    component: LoginPage
  },
  {
    path: `/${RouteEnum.login}`,
    exact: true,
    component: LoginPage
  },
  {
    path: `/${RouteEnum.team}`,
    exact: true,
    component: TeamPage,
    requireAuth: true
  },
  {
    path: `/${RouteEnum.test}`,
    exact: true,
    component: TestPage
  },
  {
    path: `/${RouteEnum.test2}`,
    exact: true,
    component: Test2Page
  },
  {
    path: `/*`,
    exact: true,
    component: NotFoundPage
  }
];

export default Routes;

// TODO: make this code more modular and create interface for whatever additional properties required.
/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route: IRoutePropsWithAuth) {
  const { isLoggedIn } = useContext(ServiceContext).authService;

  if (!!route.requireAuth && !isLoggedIn) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      // render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }: { routes: IRoutePropsWithAuth[] }) {
  // **NOTE**
  // You may wonder why not using useHistory here and directly assign it to the context.
  // Unfortunately, the use of useHistory hook causes re-rendering of the entire component every time route changes.
  // Ref: https://github.com/ReactTraining/react-router/issues/6999
  // Therefore it is better to encapsulate the history object inside a service layer after
  // any of the page component class gets initialized; page is a page.

  return (
    <Switch>
      {routes.map((route: IRoutePropsWithAuth, index: number) => {
        return <RouteWithSubRoutes key={index} {...route} />;
      })}
    </Switch>
  );
}
