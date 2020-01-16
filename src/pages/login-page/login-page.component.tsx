import React, { Component, ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import styles from './login-page.style';
import { ILoginPageProp } from './interfaces';

import { ServiceContext } from '../../core/contexts/service.context';
import { Subscription } from 'rxjs';
import FormSignIn from '../../components/forms/form-sign-in/form-sign-in.component';
import { IMessage } from '../../core/interfaces';

class LoginPage extends Component<ILoginPageProp> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore

  public componentDidMount(): void {
    this._subscription = this.context.messageService.onMessage.subscribe(
      (message: IMessage<string>) => {
        console.log(message);
        // this.props.history.push('/other_location')
      }
    );
  }

  public componentWillUnmount(): void {
    this._subscription?.unsubscribe();
  }

  public render(): ReactNode {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <FormSignIn />
      </Card>
    );
  }
}

export default withStyles(styles)(LoginPage);
