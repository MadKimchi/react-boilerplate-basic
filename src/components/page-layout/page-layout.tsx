import React, { ReactElement } from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { ServiceContext } from '../../core/contexts/service.context';
import { distinctUntilChanged } from 'rxjs/operators';

export function PageLayout(): ReactElement {
  return (
    <Container maxWidth="md">
      <Typography
        component="div"
        style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
      />
    </Container>
  );
}
