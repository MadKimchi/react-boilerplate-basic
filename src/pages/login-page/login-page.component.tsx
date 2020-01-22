import React, { ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import styles from './login-page.style';
import { ILoginPageProp } from './interfaces';

import { ServiceContext } from '../../core/contexts/service.context';
import { Subscription } from 'rxjs';
import FormSignIn from '../../components/forms/form-sign-in/form-sign-in.component';
import { BasePage } from '../../components/base-page/base-page.component';
import { RouteEnum } from '../../core/enums';
import { PageLayout } from '../../components';

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
    const { classes } = this.props;
    console.log('rerendering');
    console.log(this.context.authService.isLoggedIn);
    return (
      <Container maxWidth="lg">
        {/* <Card className={classes.card}> */}
          <FormSignIn />
        {/* </Card> */}
      </Container>
    );
  }
}

export default withStyles(styles)(LoginPage);
