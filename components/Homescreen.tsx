import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button } from '@/components/Button'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type RootStackParamList = {
  Home: undefined
  Quiz: undefined
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export default function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp
}) {
  return (
    <View style={styles.navigation}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        Welcome to the Native Balance App
      </GradientText>
      <Button title="Go to Quiz" onPress={() => navigation.navigate('Quiz')} />
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
    textAlign: 'center',
  },
})
