import { put, take } from 'redux-saga/effects';

import {
  GET_CART_ITEMS,
  setCartItemsFailed,
  setCartItemsRequested,
  setCartItemsSucceeded
} from '../actions';

async function loadItem({ id }) {
  const response = await fetch(process.env.REACT_APP_DOMAIN + 'items/' + id);
  const data = await response.json();
  const item = data[0];
  return item;
}

export function* fetchItemsSaga() {
  yield put(setCartItemsRequested());
  const { items: itemsMeta } = yield take(GET_CART_ITEMS);
  const itemsPromise = yield itemsMeta.map(item => loadItem(item));
  const items = yield Promise.all(itemsPromise);
  if (items) {
    yield put(setCartItemsSucceeded(items));
  } else {
    yield put(setCartItemsFailed());
  }
}
