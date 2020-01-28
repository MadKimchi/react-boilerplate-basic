import React, {
  ReactElement,
  FunctionComponent,
  useState,
  useEffect
} from 'react';

import { useStyles } from './logo.style';
import Container from '@material-ui/core/Container';
import { Subject } from 'rxjs';

export const Logo: FunctionComponent<{ errorSubject: Subject<boolean> }> = ({
  errorSubject
}): ReactElement => {
  const classes = useStyles();
  const [error, setError] = useState(false);

  useEffect(
    () => {
      const subscription = errorSubject.subscribe((hasError: boolean) => {
        setError(hasError);
      });

      return () => {
        subscription.unsubscribe();
      };
    },
    [errorSubject]
  );

  return (
    <div className={classes.logoContainer}>
      <Container maxWidth="sm">
        <div className={classes.logo}>Logo Text</div>
      </Container>
      {error && (
        <div className={classes.errorContainer}>
          <Container maxWidth="sm">Error</Container>
        </div>
      )}
    </div>
  );
};
