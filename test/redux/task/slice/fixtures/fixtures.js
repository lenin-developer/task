export const payloadMock = {
  TASK: {
    task: {
      id: 1,
      title: 'title',
      description: 'descripcion',
      finalized: false
    }
  },
  ID: {
    id: 2
  }
}

export const stateMock = {
  INIT: {
    list: [],
    error: null,
    loading: false
  },
  ONE_TASK: {
    list: [
      payloadMock.TASK.task
    ],
    error: null,
    loading: false
  },
  THREEN_TASK: {
    list: [
      {
        ...payloadMock.TASK.task,
        id: 1
      },
      {
        ...payloadMock.TASK.task,
        id: 2
      },
      {
        ...payloadMock.TASK.task,
        id: 3
      }

    ],
    error: null,
    loading: false
  }

}
