import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from './init/App';
import {Dashboard} from './dashboard/containers';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
);

export default Routes;
