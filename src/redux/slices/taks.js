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


export const task = createSlice({
    name: 'task',
    initialState,
    reducers: {
        initTasks: (state, {payload})=>{
            return {
                ...state,
                list: [
                    ...payload?.list
                ]
            }
        },
        taskAdd: (state, {payload})=>{
            return {
                ...state,
                list: [
                    ...state?.task?.list,
                    {...payload.list, loading:false, error: null}
                ],
            }
        },
        taskRemove: (state, {payload} )=>{
            return {
                ...state,
                list: state?.task?.list?.filter(task => task.id !== payload?.id)
            }
        },
        taskEdit: ()=>{

        },
        loading: ()=> {

        },
        taskLoaging: ()=>{

        },
        error: ()=>{

        },
        taskError: ()=>{

        }
    }
})

export const {taskAdd,taskRemove,taskEdit,loading,taskLoaging,error,taskError} = task.actions