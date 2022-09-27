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
    /*{
        message: 
    }*/
    loading: false

}


export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initTasks: (state) => { //! use this action in your components
            //*run middleware initTasksSaga  
            state.loading = true
        },
        loadingTasks: (state, { payload }) => { // loading one task
            state.list = state?.list?.map((task) => {
                if (task?.id === payload?.id) return { ...task, loading: true }
                return task
            })
        },
        finishLoadingTask: (state, { payload }) => { // finish loading one task
            state.list = state?.list?.map((task) => {
                if (task?.id === payload?.id) return { ...task, loading: false }
                return task
            })
        },
        setTasks: (state, { payload }) => { //set all tasks
            state.list = payload?.data.map((task) => ({
                ...task,
                loading: false,
                error: false,
            }))
        },
        getFetchFailed: (state, { payload }) => { // error get //!deprecated, replace by errorTask
            state.error = payload;
            state.loading = false;
        },
        errorTask: (state, { payload }) => { // error task
            state.error = payload;
            state.loading = false;
        },
        addTask: (state, { payload }) => { // add one task
            state.list = [
                ...state.list,
                payload?.task
            ]
            // reset
            state.loading = false
            state.error = null
        },
        removeTaskRequired: () => {

        },
        removeTaskSucceded: (state, { payload }) => {
            state.list = state.list.filter((task) => task.id !== payload.id)
        },

    }
})


export const { initTasks, loadingTasks, finishLoadingTask, 
    setTasks, addTask, getFetchFailed, removeTask, 
    removeTaskRequired, removeTaskSucceded,
    errorTask,
} = tasks.actions