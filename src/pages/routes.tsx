import React, { useContext } from 'react';
import { Route, Switch, RouteProps, useHistory } from 'react-router-dom';
import { RouteEnum } from '../core/enums';
import LoginPage from './login-page/login-page.component';
import { TeamPage } from './team-page/team-page.component';
import { NotFoundPage } from './not-found-page/not-found-page.component';
import { ServiceContext } from '../core/contexts/service.context';

// TODO: add nested routing
const Routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: LoginPage
  },
  {
    path: `/${RouteEnum.login}`,
    component: LoginPage
  },
  {
    path: `/${RouteEnum.team}`,
    component: TeamPage
  }
];

export default Routes;

// TODO: make this code more modular and create interface for whatever additional properties required.
/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route: any) {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }: { routes: RouteProps[] }) {
  const history = useHistory();
  console.log(history);
  const { messageService } = useContext(ServiceContext);
  messageService.history = history;

  return (
    <Switch>
      {routes.map((route: RouteProps, index: number) => {
        return <RouteWithSubRoutes key={index} {...route} />;
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
}
