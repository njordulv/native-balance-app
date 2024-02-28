import { Text, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
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
      <View>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          What is your goal with regard to weight management?
        </GradientText>
        <Text style={styles.text}>
          Start your journey {'\n'}to a better lifestyle today.
        </Text>
      </View>
      <ButtonOriginal
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Baloo400',
    fontSize: 20,
    lineHeight: 26,
    color: colors.white,
    textAlign: 'center',
    marginTop: 20,
  },
})
