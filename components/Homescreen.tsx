import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button } from '@/components/Button'
import GradientText from '@/components/GradientText'
import Logo from '@/components/Logo'
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
      <Logo />
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
