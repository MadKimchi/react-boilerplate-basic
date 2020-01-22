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
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export const FormSignIn: FunctionComponent<{
  isModalable?: boolean;
}> = ({ isModalable }): ReactElement => {
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
    authService.signIn(payload).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        routeService.navigate(RouteEnum.team);
        console.log(isModalable);
      }
    });
  }

  return (
    <FormGroup>
      <FormControl variant="filled">
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
          value={payload.password}
          onChange={onPasswordChange}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox checked={payload.rememberMe} onChange={onRememberMe} />
        }
        label="Secondary"
      />
      <Button variant="contained" color="primary" onClick={onSignIn}>
        Sign In
      </Button>
    </FormGroup>
  );
  // </form>
};

export default FormSignIn;

// export default function FormSignIn(): ReactElement {
//   const [payload, setPayload] = useState({ email: '', password: '' });
//   const { authService, routeService } = useContext(ServiceContext);

//   const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setPayload({ ...payload, email: event.target.value });
//   };

//   const onPasswordChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setPayload({ ...payload, password: event.target.value });
//   };

//   const onSignIn = (): void => {
//     authService.signIn(payload).subscribe(isLoggedIn => {
//       if (isLoggedIn) {
//         routeService.navigate(RouteEnum.team);
//       }
//     });
//   };

//   return (
//     <form noValidate autoComplete="off">
//       <FormControl variant="filled">
//         <InputLabel htmlFor="field-email">Email</InputLabel>
//         <FilledInput
//           id="field-email"
//           value={payload.email}
//           onChange={onEmailChange}
//         />
//       </FormControl>
//       <FormControl variant="filled">
//         <InputLabel htmlFor="field-password">Password</InputLabel>
//         <FilledInput
//           id="field-password"
//           value={payload.password}
//           onChange={onPasswordChange}
//         />
//       </FormControl>
//       <button type="button" onClick={onSignIn}>
//         Sign In
//       </button>
//     </form>
//   );
// }
