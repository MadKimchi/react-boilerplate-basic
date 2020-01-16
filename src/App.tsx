import React, { FunctionComponent, ReactElement, useContext } from 'react';
import Routes, { RenderRoutes } from './pages/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ServiceContext } from './core/contexts/service.context';
import { AuthService } from './core/services/auth.service';
import { ModalService } from './core/services/modal.service';
import { ModalDialog } from './components/modal-dialog/modal-dialog.component';

const App: FunctionComponent = (): ReactElement => {
  const authService: AuthService = useContext(ServiceContext).authService;
  const modalService: ModalService<boolean> = useContext(ServiceContext)
    .modalService;
  const onClick = (): void => {
    console.log(authService);
    authService.onLogin.next(true);
    const component = () => <button>M</button>;
    modalService.onInjection.next(component);
  };
  return (
    <Router>
      <ModalDialog />
      <div>
        <button onClick={onClick}>M</button>
        <div>
          <RenderRoutes routes={Routes} />
        </div>
      </div>
    </Router>
  );
};

export default App;
