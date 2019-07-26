import { createStore, combineReducers, compose } from 'redux';

import reducer from './reducers/test';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      state: reducer
    }),
    composeEnhancers()
  );
  return store;
};
