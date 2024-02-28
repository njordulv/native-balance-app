import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type ParamsList = {
  Step3: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step3'>

export default function Step2({ navigation }: { navigation: NavProps }) {
  return (
    <View style={styles.navigation}>
      <View>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          How many full meals do you have during the day?
        </GradientText>
      </View>
      <ButtonOriginal
        title="Continue"
        onPress={() => navigation.navigate('Step3')}
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
