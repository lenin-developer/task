import { call, put, takeLatest } from 'redux-saga/effects'
import {deleteFetch} from '../../../utils/apis/fetchs'
import {removeTaskRequired, loadingTasks, removeTaskSucceded, errorTask} from '../slices/taks'
import {path} from '../../../constants/paths'

function* deleteTaskRequired(action) {
    const {payload} = action;
    try {
        yield put(loadingTasks(payload?.id))
        yield call(deleteFetch, path?.tasks, payload?.id)
        yield put(removeTaskSucceded({id: payload?.id}));
    } catch (error) {
        yield put(errorTask(error))
    }
}

export function* removeTaskRequiredSaga(){
    yield takeLatest(removeTaskRequired?.type, deleteTaskRequired )
} 