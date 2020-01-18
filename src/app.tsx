import React, { FunctionComponent, ReactElement } from 'react';
import Routes, { RenderRoutes } from './pages/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalDialog } from './components/modal-dialog/modal-dialog.component';
import { ServiceContext } from './core/contexts/service.context';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <ModalDialog />
      <div>
        <div>
          <RenderRoutes routes={Routes} />
        </div>
      </div>
    </Router>
  );
};

export default App;
