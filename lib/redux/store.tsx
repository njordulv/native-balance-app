import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import stepsReducer from './slices/stepSlice'

export const store = configureStore({
  reducer: {
    step: stepsReducer,
  },
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
