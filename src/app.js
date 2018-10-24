import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom';
import store from './store';
import history from './history'

import * as RoutesModule from './routes.js';
let routes = RoutesModule.routes;

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} children={ routes } />
    </Provider>
)}
;

export default hot(module)(App);