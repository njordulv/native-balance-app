import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import { useDispatch } from '@/redux/store'
import { setGender } from '@/slices/stepSlice'
import GradientText from '@/components/GradientText'
import ButtonImage from '@/components/buttons/ButtonImage'
import colors from '@/utils/colors'

type ParamsList = {
  Statistic: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Statistic'>

export default function Step1({ navigation }: { navigation: NavProps }) {
  const dispatch = useDispatch()

  useStepProgress({ step: 1, visible: true })

  const ButtonHandlerMale = () => {
    dispatch(setGender('men'))
    navigation.navigate('Statistic')
  }

  const ButtonHandlerFemale = () => {
    dispatch(setGender('women'))
    navigation.navigate('Statistic')
  }

  return (
    <View style={styles.container}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        What is your gender?
      </GradientText>
      <View>
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
    paddingTop: 25,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
})
