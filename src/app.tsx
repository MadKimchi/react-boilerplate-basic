import React, { FunctionComponent, ReactElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes, { RenderRoutes } from './pages/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalDialog } from './components/modal-dialog/modal-dialog.component';
import { MenuAppBar } from './components';

const App: FunctionComponent = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Router>
        <ModalDialog />
        <div>
          <div>
            <RenderRoutes routes={Routes} />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
