import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {tasks} from './task/slices/taks'
import {rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    tasks: tasks.reducer,
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)