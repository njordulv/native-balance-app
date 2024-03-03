import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useDispatch } from '@/redux/store'
import { setGender } from '@/slices/stepSlice'
import GradientText from '@/components/GradientText'
import ButtonImage from '@/components/buttons/ButtonImage'
import colors from '@/utils/colors'

type ParamsList = {
  StatScreen: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'StatScreen'>

export default function Step1({ navigation }: { navigation: NavProps }) {
  const dispatch = useDispatch()

  const ButtonHandlerMale = () => {
    dispatch(setGender('men'))
    navigation.navigate('StatScreen')
  }

  const ButtonHandlerFemale = () => {
    dispatch(setGender('women'))
    navigation.navigate('StatScreen')
  }

  return (
    <View style={styles.container}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        What is your gender?
      </GradientText>
      <View style={styles.content}>
        <View style={styles.buttons}>
          <ButtonImage
            onPress={ButtonHandlerMale}
            source={require('@/assets/fitness-man.png')}
            title="Man"
          />
          <ButtonImage
            onPress={ButtonHandlerFemale}
            source={require('@/assets/fitness-woman.png')}
            title="Woman"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    paddingBottom: 50,
    paddingTop: 15,
  },
  content: {
    width: '100%',
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
})