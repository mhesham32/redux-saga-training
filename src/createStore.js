import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import user from './reducers/user';
import { initSagas } from './initSagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      user
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  initSagas(sagaMiddleware);
  return store;
};
