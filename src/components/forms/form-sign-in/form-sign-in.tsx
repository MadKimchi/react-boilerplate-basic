import React, {
  ChangeEvent,
  ReactElement,
  useState,
  useContext,
  FunctionComponent
} from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import { ServiceContext } from '../../../core/contexts/service.context';
import { RouteEnum } from '../../../core/enums';
import { useStyles } from './form-sign-in.style';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { Subject } from 'rxjs';

export const FormSignIn: FunctionComponent<{
  errorSubject: Subject<boolean>;
  isModalable?: boolean;
}> = ({ errorSubject, isModalable }): ReactElement => {
  const classes = useStyles();
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const { authService, routeService } = useContext(ServiceContext);

  function onEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setPayload({ ...payload, email: event.target.value });
  }

  function onPasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPayload({ ...payload, password: event.target.value });
  }

  function onRememberMe(event: ChangeEvent<HTMLInputElement>): void {
    setPayload({ ...payload, rememberMe: event.target.checked });
  }

  function onSignIn(): void {
    authService.signIn(payload).subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          routeService.navigate(RouteEnum.team);
        }
      },
      (error: Error) => {
        errorSubject.next(true);
      }
    );
  }

  return (
    <FormGroup>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel htmlFor="field-email">Email</InputLabel>
        <FilledInput
          id="field-email"
          value={payload.email}
          onChange={onEmailChange}
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="field-password">Password</InputLabel>
        <FilledInput
          id="field-password"
          type="password"
          value={payload.password}
          onChange={onPasswordChange}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox checked={payload.rememberMe} onChange={onRememberMe} />
        }
        label="Remember Me"
      />
      <Button variant="contained" color="primary" onClick={onSignIn}>
        Sign In
      </Button>
    </FormGroup>
  );
};
