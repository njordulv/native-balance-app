import { createSlice } from '@reduxjs/toolkit'

interface StepState {
  gender: string
}

const initialState: StepState = {
  gender: '',
}

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setGender(state, action) {
      state.gender = action.payload
    },
  },
})

export const { setGender } = stepSlice.actions
export const selectGender = (state: { step: StepState }) => state.step.gender
export default stepSlice.reducer
