import * as sagas from './sagas';

export function initSagas(sagaMiddleware) {
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
}
