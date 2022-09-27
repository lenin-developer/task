import {all} from 'redux-saga/effects'
import {initTasksSaga, removeTaskRequiredSaga} from './task/saga'

export function* rootSaga(){
    yield all([
        initTasksSaga(),
        removeTaskRequiredSaga()
    ])
}