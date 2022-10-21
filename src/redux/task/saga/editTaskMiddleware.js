import { call, put, takeLatest } from 'redux-saga/effects'
import { editTaskReqired, editTaskSucceded } from '../slices/taks'
import { putRequest } from '../../../utils/apis'
import { path } from '../../../constants/paths'

const taskFormat = (res) => {
  const { data } = res
  const { id, attributes } = data
  return {
    id,
    title: attributes?.title,
    description: attributes?.description
  }
}

function * editTaskProcessing (action) {
  try {
    const { payload } = action
    const { id, title, description } = payload
    const body = { data: { title, description } }

    const res = yield call(putRequest, `${path?.tasks}/${id}`, body)

    const task = taskFormat(res)
    yield put(editTaskSucceded(task))
  } catch (error) {
    console.log('catch del middleware')
  }
}

export function * editTaskMiddleware () {
  yield takeLatest(editTaskReqired.type, editTaskProcessing)
}
