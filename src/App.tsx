import React, { FunctionComponent, ReactElement } from 'react';
import Routes, { RenderRoutes } from './pages/routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <div>
        <div>
          <RenderRoutes routes={Routes} />
        </div>
      </div>
    </Router>
  );
};

export default App;
