import { call, takeLatest, put } from 'redux-saga/effects'
import { path } from '../../../constants/paths'
import { postFetch } from '../../../utils/apis/fetchs'
import { addTaskRequired, errorTask, addTaskSucceeded } from '../slices/taks'

function * addTaskProcessing (action) {
  try {
    const body = {
      data: {
        ...action?.payload,
        finalized: false
      }
    }
    const res = yield call(postFetch, path?.tasks, body)
    yield put(addTaskSucceeded({ task: res?.data }))
  } catch (error) {
    yield put(errorTask(error))
  }
}

export function * addTaskRequiredSaga () {
  yield takeLatest(addTaskRequired.type, addTaskProcessing)
}
