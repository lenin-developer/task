import { call, put, takeLatest } from 'redux-saga/effects'
import { deleteFetch } from '../../../utils/apis/fetchs'
import { removeTaskRequired, removeTaskSucceded, errorTask, finishLoadingATask } from '../slices/taks'
import { path } from '../../../constants/paths'

function * removeTaskProcessing (action) {
  const { payload } = action
  try {
    yield call(deleteFetch, path?.tasks, payload?.id)
    yield put(removeTaskSucceded({ id: payload?.id }))
  } catch (error) {
    yield put(finishLoadingATask({ id: payload?.id }))
    yield put(errorTask(error))
  }
}

export function * removeTaskRequiredSaga () {
  yield takeLatest(removeTaskRequired?.type, removeTaskProcessing)
}
