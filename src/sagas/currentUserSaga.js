import { take, put, call } from 'redux-saga/effects';
import {
  GET_CURRENT_USER,
  setUserRequested,
  setUserFailed,
  setUserSucceded
} from '../actions';

export function* currentUserSaga() {
  const { id } = yield take(GET_CURRENT_USER);
  yield put(setUserRequested());
  const response = yield call(
    fetch,
    `${process.env.REACT_APP_DOMAIN}user/${id}`
  );
  const data = yield response.json();
  if (!data) {
    yield put(setUserFailed());
  }
  yield put(setUserSucceded(data));
  console.log({ data });
}
