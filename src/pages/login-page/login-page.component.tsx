import React, { ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import styles from './login-page.style';
import { ILoginPageProp } from './interfaces';

import { ServiceContext } from '../../core/contexts/service.context';
import { Subscription } from 'rxjs';
import FormSignIn from '../../components/forms/form-sign-in/form-sign-in.component';
import { BasePage } from '../../components/base-page/base-page.component';

class LoginPage extends BasePage<ILoginPageProp> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore

  public componentWillUnmount(): void {
    this._subscription?.unsubscribe();
  }

  public render(): ReactNode {
    const { classes } = this.props;
    console.log('rerendering');
    console.log(this.context.authService.isLoggedIn);
    return (
      <Card className={classes.card}>
        <FormSignIn />
      </Card>
    );
  }
}

export default withStyles(styles)(LoginPage);
