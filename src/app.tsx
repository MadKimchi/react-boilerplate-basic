import React, { FunctionComponent, ReactElement, useContext } from 'react';
import Routes, { RenderRoutes } from './pages/routes';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { ServiceContext } from './core/contexts/service.context';
import { ModalDialog } from './components/modal-dialog/modal-dialog.component';

const App: FunctionComponent = (): ReactElement => {
  // const authService: AuthService = useContext(ServiceContext).authService;
  const { modalService } = useContext(ServiceContext);
  console.log(modalService);
  // const router = useContext(__RouterContext);
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
