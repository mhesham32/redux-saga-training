import { take, put, call, select } from 'redux-saga/effects';
import {
  SUCCESS_PHASE,
  ERROR_PHASE,
  VALIDATE_CARD_PHASE,
  VALIDATE_CART_PHASE,
  FINALIZATION_PHASE,
  CHECK_OUT,
  setCheckoutPhase
} from '../actions';

import { currentUserSelector } from '../selectors/currentUserSelector';

function* validateCart({ id }) {
  const response = yield fetch(
    process.env.REACT_APP_DOMAIN + 'cart/validate/' + id
  );
  const { validated } = yield response.json();
  return validated;
}

function* validateUserCard({ id }) {
  const response = yield fetch(
    process.env.REACT_APP_DOMAIN + 'card/validate/' + id
  );
  const { validated } = yield response.json();
  return validated;
}

function* excutePurchase({ id }) {
  const response = yield fetch(
    process.env.REACT_APP_DOMAIN + 'card/charge/' + id
  );
  const { success } = yield response.json();
  return success;
}

function* checkout() {
  const user = yield select(currentUserSelector);

  yield put(setCheckoutPhase(VALIDATE_CART_PHASE));
  const isValidCart = yield call(validateCart, user);
  if (!isValidCart) {
    yield put(setCheckoutPhase(ERROR_PHASE));
    return;
  }
  yield put(setCheckoutPhase(VALIDATE_CARD_PHASE));
  const isValidCard = yield call(validateUserCard, user);
  if (!isValidCard) {
    yield put(setCheckoutPhase(ERROR_PHASE));
    return;
  }

  yield put(setCheckoutPhase(FINALIZATION_PHASE));

  const isSuccessPurchase = yield call(excutePurchase, user);

  if (!isSuccessPurchase) {
    yield put(setCheckoutPhase(ERROR_PHASE));
    return;
  }

  yield put(setCheckoutPhase(SUCCESS_PHASE));
}

export function* checkoutSaga() {
  yield take(CHECK_OUT);
  yield call(checkout);
}
