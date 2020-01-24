import React, { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { ModalContainer, Navigation } from './components';
import RouterOutlet from './routes/router-outlet';
import Routes from './routes/routes';

const App: FunctionComponent = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Router>
        <RouterOutlet routes={Routes} />
      </Router>
      <ModalContainer />
    </>
  );
};

export default App;
