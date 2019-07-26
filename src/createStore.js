import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/test';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      state: reducer
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  return store;
};
