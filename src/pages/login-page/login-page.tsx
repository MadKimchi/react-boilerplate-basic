import React, { ReactNode } from 'react';
import { Subscription, Subject } from 'rxjs';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import styles from './login-page.style';
import { ILoginPageProp } from './login-page.interface';

import { ServiceContext, RouteEnum } from '../../core';
import { BasePage, FormSignIn } from '../../components';
import { Logo } from './components/logo/logo';

class LoginPage extends BasePage<ILoginPageProp> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore
  private _errorSubject: Subject<boolean> = new Subject<boolean>();

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
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Logo errorSubject={this._errorSubject}/>
        <Container maxWidth="sm">
            <div>
              <FormSignIn errorSubject={this._errorSubject}/>
            </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);