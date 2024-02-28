import { Text, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import ButtonTransparent from '@/components/buttons/ButtonTransparent'
import GradientText from '@/components/GradientText'
import Logo from '@/components/Logo'
import colors from '@/utils/colors'

type RootStackParamList = {
  Home: undefined
  Step1: undefined
  Account: undefined
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
      <View style={styles.content}>
        <View>
          <GradientText
            style={styles.heading}
            colors={[colors.purple, colors.blue]}
          >
            Welcome to the {'\n'} Native Balance App
          </GradientText>
          <Text style={styles.text}>
            Start your journey {'\n'}to a better lifestyle today.
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <ButtonOriginal
          title="Start Now"
          onPress={() => navigation.navigate('Step1')}
        />
        <ButtonTransparent
          title="I have an account"
          onPress={() => navigation.navigate('Account')}
          disabled={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    paddingBottom: 50,
  },
  content: {
    flex: 1,
    gap: 30,
    paddingTop: 190,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Baloo600',
    fontSize: 35,
    lineHeight: 40,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Baloo400',
    fontSize: 22,
    lineHeight: 28,
    color: colors.color,
    textAlign: 'center',
    marginTop: 20,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    gap: 16,
    position: 'relative',
    bottom: 0,
  },
})
