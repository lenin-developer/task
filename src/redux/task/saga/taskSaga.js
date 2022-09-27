import { call, put, takeLatest } from 'redux-saga/effects'
import {setTasks, initTasks, loadingTasks} from '../slices/taks'
import {get} from '../../../utils/apis'
import {path} from '../../../constants/paths'



function* getTasksRequered(){
    try {
        const tasks = yield call(get, path.tasks)
        yield put(loadingTasks())
        yield put(setTasks(tasks))
    } catch (error) {
        console.log('error...')
    }
}

export function* initTasksSaga(){
    yield takeLatest(initTasks?.type, getTasksRequered)
}