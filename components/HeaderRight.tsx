import { View, Text, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type Types = {
  step?: string
}

const HeaderRight = ({ step }: Types) => {
  return (
    <View style={styles.container}>
      {step && <Text style={styles.steps}>{step}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 10,
  },
  steps: {
    fontFamily: 'Baloo400',
    color: colors.color,
    fontSize: 16,
  },
})

export default HeaderRight
