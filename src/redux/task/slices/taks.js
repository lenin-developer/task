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

const loadingAtask= (state,  payload ) => { // sets the loading property to true for a task
    const newListTasks = state?.list?.map((task) => {
        if (task?.id === payload?.id) return { ...task, loading: true }
        return task
    })
    return newListTasks;
}

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initTasks: (state) => { // loading all state //*run middleware initTasksSaga  
            state.loading = true
        },
        removeTaskRequired: (state, { payload }) => { // remove one task, //* run middleware removeTaskRequiredSaga
            state.list = loadingAtask(state, payload )
        },
        addTaskRequired: (state)=> { // add one task //* run middleware
            state.loading = true
        },
        finishLoadingATask: (state, { payload }) => { // finish loading one task
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
        addTaskSucceeded: (state, { payload }) => { // add one task
            state.list = [
                ...state?.list,
                payload?.task
            ]
            // reset
            state.loading = false
            state.error = null
        },
        removeTaskSucceded: (state, { payload }) => {
            state.list = state.list.filter((task) => task.id !== payload.id)
        },
        errorTask: (state, { payload }) => { // error task
            state.error = payload;
            state.loading = false;
        },

    }
})


export const { initTasks, finishLoadingATask, 
    setTasks, addTaskSucceeded, addTaskRequired, removeTask, 
    removeTaskRequired, removeTaskSucceded,
    errorTask,
} = tasks.actions