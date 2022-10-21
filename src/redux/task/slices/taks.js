import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    /*
        {
            id:
            title:
            description:
            finalized:
            loading:
        }
        */
  ],
  error: null,
  /* {
        message:
    } */
  loading: false

}

export const loadingAtask = (state, payload) => { // sets the loading property to true for a task
  const newListTasks = state?.list?.map((task) => {
    if (task?.id === payload?.id) return { ...task, loading: true }
    return task
  })
  return newListTasks
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    initTasks: (state) => { // loading all state //*run middleware initTasksSaga
      state.loading = true
    },
    setTasks: (state, { payload }) => { // set all tasks
      state.list = payload?.data.map((task) => ({
        ...task,
        loading: false,
        error: false
      }))
    },
    addTaskRequired: (state) => { // add one task //* run middleware
      state.loading = true
    },
    addTaskSucceeded: (state, { payload }) => { // add one task
      state.list = [
        ...state?.list,
        payload?.task
      ]
      // reset
      state.loading = false
      state.error = null
    },
    removeTaskRequired: (state, { payload }) => { // remove one task, //* run middleware removeTaskRequiredSaga
      state.list = loadingAtask(state, payload)
    },
    removeTaskSucceded: (state, { payload }) => {
      state.list = state.list.filter((task) => task.id !== payload.id)
    },
    editTaskReqired: (state /* Payload */) => { //* run middleware
      state.loading = true
      // poner un squeleto
    },
    editTaskSucceded: (state, { payload }) => {
      state.list = state.list.map((task) => {
        if (state.id === payload.id) {
          return {
            ...task,
            title: payload.title,
            description: payload.description
          }
        }
        return task
      })
    },
    finishLoadingATask: (state, { payload }) => { // finish loading one task
      state.list = state?.list?.map((task) => {
        if (task?.id === payload?.id) return { ...task, loading: false }
        return task
      })
    },
    errorTask: (state, { payload }) => { // error task
      state.error = payload
      state.loading = false
    }

  }
})

export const {
  initTasks, finishLoadingATask,
  setTasks, addTaskSucceeded, addTaskRequired, removeTask,
  removeTaskRequired, removeTaskSucceded,
  errorTask,
  editTaskReqired, editTaskSucceded
} = tasks.actions
