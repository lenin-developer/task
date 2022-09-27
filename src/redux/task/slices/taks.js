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
            error:
        }
        */
    ],
    error: null,
    loading: false

}


export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initTasks: () => {
            // catch Middleware: initTasksSaga
            // loadingTask
            // setTasks || error
        },
        loadingTasks: (state) => {
            state.loading = true
        },
        setTasks: (state, { payload }) => { //set all tasks
            state.list = payload?.data
        },
        TaskAdd: (state, { payload }) => { // add uno task
            state.list = [
                ...state.list,
                payload?.task
            ]
        },
    }
})

export const { initTasks, loadingTasks, setTasks , TaskAdd } = tasks.actions