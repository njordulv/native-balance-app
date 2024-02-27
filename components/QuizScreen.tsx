import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button } from '@/components/Button'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type RootStackParamList = {
  Home: undefined
  Quiz: undefined
}

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>

export default function QuizScreen({
  navigation,
}: {
  navigation: QuizScreenNavigationProp
}) {
  return (
    <View style={styles.navigation}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        Welcome to Quiz
      </GradientText>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  heading: {
    fontFamily: 'Baloo2_500Medium',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
  },
})
