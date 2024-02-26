import { View, StyleSheet } from 'react-native'
import GradientText from '../components/GradientText'
import colors from '../utils/colors'

export default function HomeScreen() {
  return (
    <View style={styles.navigation}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        Welcome to the Native Balance App
      </GradientText>
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27272b',
  },
  heading: {
    fontFamily: 'Baloo2_500Medium',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
