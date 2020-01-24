import { RouteEnum } from '../core';
import { IRoutePropsWithAuth } from './routes.interface';
import LoginPage from '../pages/login-page/login-page';
import TeamPage from '../pages/team-page/team-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

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
    path: `/*`,
    exact: true,
    component: NotFoundPage
  }
];

export default Routes;
