import { call, put, takeLatest } from 'redux-saga/effects'
import { path } from '../../../constants/paths'
import { get } from '../../../utils/apis'
import { initTasks, setTasks, errorTask } from '../slices/taks'



function* getTasksRequered() {
    try {
        const tasks = yield call(get, path.tasks)
        yield put(setTasks(tasks))
    } catch (e) {
        yield put(errorTask(e))
    }
}

export function* initTasksSaga() {
    yield takeLatest(initTasks?.type, getTasksRequered)
}