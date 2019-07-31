import { takeLatest, select, put } from 'redux-saga/effects';
import {
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  decreaseItemQuantity,
  setItemBusy,
  setItemFree
} from '../actions';
import { currentUserSelector } from '../selectors/currentUserSelector';

function* handleIncreaseItemQuantity({ id }) {
  yield put(setItemBusy(id));

  const user = yield select(currentUserSelector);
  const response = yield fetch(
    `${process.env.REACT_APP_DOMAIN}cart/add/${user.id}/${id}`
  );
  if (response.status !== 200) {
    yield put(decreaseItemQuantity(id));
    alert("Sorry, there isn't enough items to complete your request");
  }
  yield put(setItemFree(id));
}

function* handleDecreaseItemQuantity({ id }) {
  yield put(setItemBusy(id));

  const user = yield select(currentUserSelector);
  yield fetch(`${process.env.REACT_APP_DOMAIN}cart/remove/${user.id}/${id}`);
  yield put(setItemFree(id));
}

export function* itemQuantitySaga() {
  yield takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity);
  yield takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity);
}
