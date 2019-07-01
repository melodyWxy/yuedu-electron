import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import reducers from './reducer';
import logger from 'redux-logger';

const originalReducers = {
  ...reducers,
  routing: routerReducer
};

const reducer = combineReducers(originalReducers);
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
export default store;