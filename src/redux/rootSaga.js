import {all} from 'redux-saga/effects'
import {initTasksSaga} from './task/saga/taskSaga'

export function* rootSaga(){
    yield all([
        initTasksSaga()
    ])
}