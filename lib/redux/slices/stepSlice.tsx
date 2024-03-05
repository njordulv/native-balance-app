import { createSlice } from '@reduxjs/toolkit'

interface StepState {
  gender: string
  step: number
  steps: number
  visible: boolean
}

const initialState: StepState = {
  gender: '',
  step: 0,
  steps: 11,
  visible: true,
}

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setGender(state, action) {
      state.gender = action.payload
    },
    setStep(state, action) {
      state.step = action.payload
    },
    setSteps(state, action) {
      state.steps = action.payload
    },
    setVisible(state, action) {
      state.visible = action.payload
    },
  },
})

export const { setGender, setStep, setSteps, setVisible } = stepSlice.actions

export const selectGender = (state: { step: StepState }) => state.step.gender
export const selectStep = (state: { step: StepState }) => state.step.step
export const selectSteps = (state: { step: StepState }) => state.step.steps
export const selectVisible = (state: { step: StepState }) => state.step.visible

export default stepSlice.reducer
