import React, { Component, ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './login-page.style';
import { ILoginPageProp } from './interfaces';

import { ServiceContext } from '../../core/contexts/service.context';
import { Subscription } from 'rxjs';

class LoginPage extends Component<ILoginPageProp> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore

  constructor(props: ILoginPageProp) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  public componentDidMount(): void {
    const { authService } = this.context;
    this._subscription = authService.onLogin.subscribe((isLogin: boolean) => {
      console.log(isLogin);
    });
  }

  public componentWillUnmount(): void {}

  private signIn(): void {
    const { authService } = this.context;
    authService.signIn().subscribe((response: string) => {
      console.log(response);
    });
  }

  public render(): ReactNode {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <TextField id="email" label="Email" variant="outlined" type="email" />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" color="primary" onClick={this.signIn}>
          Sign InsignIn
        </Button>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginPage);
