import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import reducers from './main/reducers';
import Routes from './routes';
import initialState from './main/initialState'

const middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = compose(middleware)(createStore)(reducers, initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={Routes} />
  </Provider>
  , document.querySelector('.container'));
