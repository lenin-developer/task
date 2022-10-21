import { all } from 'redux-saga/effects'
import { initTasksSaga, removeTaskRequiredSaga, addTaskRequiredSaga, editTaskMiddleware } from './task/saga'

export function * rootSaga () {
  yield all([
    initTasksSaga(),
    removeTaskRequiredSaga(),
    addTaskRequiredSaga(),
    editTaskMiddleware()
  ])
}
