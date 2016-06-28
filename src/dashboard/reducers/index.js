import { combineReducers } from 'redux';
import chartReducer from './chartReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  chart: chartReducer,
  routing: routerReducer
});

export default rootReducer;
