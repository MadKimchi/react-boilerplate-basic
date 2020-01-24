import React, { ReactNode } from 'react';
import { Subscription } from 'rxjs';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import styles from './login-page.style';
import { ILoginPageProp } from './login-page.interface';

import { ServiceContext, RouteEnum } from '../../core';
import { BasePage, FormSignIn } from '../../components';

class LoginPage extends BasePage<ILoginPageProp> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore

  public componentDidMount(): void {
    super.componentDidMount();
    if (this.context.authService.isLoggedIn) {
      this.context.routeService.navigate(RouteEnum.team);
    }
  }

  public componentWillUnmount(): void {
    this._subscription?.unsubscribe();
  }

  public render(): ReactNode {
    return (
      <Container maxWidth="lg">
          <FormSignIn />
      </Container>
    );
  }
}

export default withStyles(styles)(LoginPage);
