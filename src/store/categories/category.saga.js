import { all, call, put, takeLatest } from 'redux-saga/effects';
// import SHOP_DATA from '../../shop-data';
// newly added
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(
      getCategoriesAndDocuments,
      'collections',
    );
    console.log('Fetched categories from Firestore:', categoriesArray); // Log fetched categories
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    console.error('Error fetching categories:', error); // Log errors
    yield put(fetchCategoriesFailed(error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
// Worker Saga: This function does the actual work when the action is dispatched
// function* restoreDatabaseSaga() {
//   try {
//     yield call(addCollectionAndDocuments, 'collections', SHOP_DATA); // Calls Firebase function
//     console.log('✅ Database restored successfully!');
//   } catch (error) {
//     console.error('❌ Error restoring database:', error);
//   }
// }

// Watcher Saga: This function listens for the action and runs the worker saga
// export function* watchRestoreDatabase() {
//   yield takeLatest(RESTORE_DATABASE_START, restoreDatabaseSaga);
// }
