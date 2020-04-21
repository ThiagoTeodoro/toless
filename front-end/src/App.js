import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import index from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={index} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
