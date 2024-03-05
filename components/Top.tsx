import { View, StyleSheet } from 'react-native'
import { useSelector } from '@/redux/store'
import { selectStep, selectSteps, selectVisible } from '@/slices/stepSlice'
import StepProgress from '@/components/StepProgress'

export default function Top() {
  const stepCurrent = useSelector(selectStep)
  const stepsTotal = useSelector(selectSteps)
  const visible = useSelector(selectVisible)

  return (
    <View style={styles.container}>
      <StepProgress
        step={stepCurrent}
        steps={stepsTotal}
        height={5}
        visibility={visible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 56,
    right: 0,
    left: 0,
    marginLeft: 60,
    marginRight: 22,
    zIndex: 1,
  },
})
