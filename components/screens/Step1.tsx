import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type ParamsList = {
  Step2: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step2'>

export default function Step1({ navigation }: { navigation: NavProps }) {
  return (
    <View style={styles.navigation}>
      <View>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          What is your goal with regard to weight management?
        </GradientText>
      </View>
      <ButtonOriginal
        title="Continue"
        onPress={() => navigation.navigate('Step2')}
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
    paddingHorizontal: 22,
    paddingBottom: 50,
    paddingTop: 15,
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
