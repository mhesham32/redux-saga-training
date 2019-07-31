import { take, put, actionChannel } from 'redux-saga/effects';

import {
  SHIPPING_FETCHED,
  SHIPPING_FETCHING,
  setCheckoutAvailability
} from '../actions';

export function* checkOutAvailabilitySaga() {
  const channel = yield actionChannel([SHIPPING_FETCHED, SHIPPING_FETCHING]);
  while (true) {
    const { type } = yield take(channel);
    yield put(setCheckoutAvailability(type === SHIPPING_FETCHED));
  }
}
