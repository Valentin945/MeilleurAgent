import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import * as RoutesModule from './routes.js';
let routes = RoutesModule.routes;

const App = () => {
  console.log(routes)
  return (
    <Provider store={store}>
      <BrowserRouter basename='/' children={ routes } />
    </Provider>
)}
;

export default hot(module)(App);