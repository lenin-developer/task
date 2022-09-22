import { configureStore } from '@reduxjs/toolkit'
import {task} from './slices/taks'

export const store = configureStore({
  reducer: {
    task: task.reducer,
  },
})