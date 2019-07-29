import { take, put } from 'redux-saga/effects';
import { SET_CURRENT_USER_SUCCEDED, getCartItems } from '../actions';

export function* fetchCartSaga() {
  const {
    user: { id }
  } = yield take(SET_CURRENT_USER_SUCCEDED);
  const response = yield fetch(process.env.REACT_APP_DOMAIN + 'cart/' + id);
  const { items } = yield response.json();
  yield put(getCartItems(items));
}
