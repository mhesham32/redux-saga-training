import { take, put } from 'redux-saga/effects';
import { SET_CURRENT_USER_SUCCEDED, setTaxRate } from '../actions';
export function* taxRateSaga() {
  const { user } = yield take(SET_CURRENT_USER_SUCCEDED);
  const { country } = user;
  const response = yield fetch(process.env.REACT_APP_DOMAIN + 'tax/' + country);
  const { rate } = yield response.json();
  yield put(setTaxRate(rate));
}
