import { Text, View, StyleSheet } from 'react-native'
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
        Welcome to the {'\n'} Native Balance App
      </GradientText>
      <Text style={styles.text}>
        Start your journey {'\n'}to a better lifestyle today.
      </Text>
      <Button title="Start Now" onPress={() => navigation.navigate('Quiz')} />
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
    fontFamily: 'Baloo600',
    fontSize: 32,
    lineHeight: 38,
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
