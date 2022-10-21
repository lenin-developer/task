import { stateMock, payloadMock } from './fixtures/fixtures'
import { tasks, addTaskSucceeded, loadingAtask } from '../../../../src/redux/task/slices/taks'

describe('slice task', () => {
  test('estado inicial de task: uni', () => {
    const store = tasks.reducer(stateMock.INIT, {})
    expect(stateMock.INIT).toEqual(store)
  })

  test('addTaskRequired - debe de agregar una tarea al state:  uni', () => {
    const store = tasks.reducer(stateMock.INIT, addTaskSucceeded(payloadMock.TASK))
    expect(store).toEqual(stateMock.ONE_TASK)
  })
})
