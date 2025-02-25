import { all, call } from 'redux-saga/effects';
import {
  categoriesSaga,
  watchRestoreDatabase,
} from './categories/category.saga'; // Import your new saga
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield all([
    call(categoriesSaga),
    call(userSagas),
    call(watchRestoreDatabase), // include your new saga
  ]);
}
