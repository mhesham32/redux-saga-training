import { select, put, takeLatest } from 'redux-saga/effects';

import {
  SHIPPING_FETCHED,
  SHIPPING_FETCHING,
  setShipping,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  SET_CART_ITEMS_SUCCEEDED
} from '../actions';

const itemsSelector = state => state.cart.userItems;

function* shipping() {
  yield put({ type: SHIPPING_FETCHING });
  const items = yield select(itemsSelector);
  const itemsRequestString = items
    .reduce((string, item) => {
      for (let i = 0; i < item.quantity; i++) {
        string += item.id + ',';
      }
      return string;
    }, '')
    .replace(/,\s*$/, '');

  const response = yield fetch(
    process.env.REACT_APP_DOMAIN + 'shipping/' + itemsRequestString
  );
  const { total } = yield response.json();
  yield put({ type: SHIPPING_FETCHED });
  yield put(setShipping(total));
}

export function* shippingSaga() {
  yield takeLatest(
    [SET_CART_ITEMS_SUCCEEDED, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY],
    shipping
  );
}
