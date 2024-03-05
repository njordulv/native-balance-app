import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setStep, setVisible } from '@/slices/stepSlice'

type Props = {
  step: number
  visible: boolean
}

export const useStepProgress = ({ step, visible }: Props) => {
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(step))
      dispatch(setVisible(visible))
    }, [dispatch, visible])
  )
}
