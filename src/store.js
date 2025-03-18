import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteslice'

export default configureStore({
  reducer: {
    counter: pasteReducer,
  },
})