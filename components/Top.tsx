import { View, StyleSheet } from 'react-native'
import { useSelector } from '@/redux/store'
import { selectStep, selectSteps } from '@/slices/stepSlice'
import StepProgress from '@/components/StepProgress'

export default function Top() {
  const stepCurrent = useSelector(selectStep)
  const stepsTotal = useSelector(selectSteps)

  return (
    <View style={styles.container}>
      <StepProgress step={stepCurrent} steps={stepsTotal} height={5} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 55,
    right: 0,
    left: 0,
    marginLeft: 60,
    marginRight: 22,
    zIndex: 1,
  },
})
