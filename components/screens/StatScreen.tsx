import { Text, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LineChart } from 'react-native-gifted-charts'
import GradientText from '@/components/GradientText'
import ButtonOriginal from '../buttons/ButtonOriginal'
import colors from '@/utils/colors'

type ParamsList = {
  Step2: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step2'>

export default function StatScreen({ navigation }: { navigation: NavProps }) {
  const dataRed = [
    { value: 60 },
    { value: 58 },
    { value: 49 },
    { value: 63 },
    { value: 55 },
    { value: 82 },
    { value: 85 },
  ]

  const dataGreen = [
    { value: 60 },
    { value: 54 },
    { value: 37 },
    { value: 33 },
    { value: 31 },
    { value: 24 },
    { value: 23 },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          Balance App tailors your health & weight loss journey without diets or
          restrictions
        </GradientText>
        <View style={styles.chart}>
          <LineChart
            areaChart
            curved
            isAnimated
            animateTogether
            hideAxesAndRules
            hideDataPoints
            animationDuration={2000}
            initialSpacing={0}
            height={240}
            spacing={53}
            data={dataRed}
            data2={dataGreen}
            color1={colors.red}
            color2={colors.blue}
            startFillColor1={colors.red}
            startFillColor2={colors.blue}
            endFillColor1={colors.red}
            endFillColor2={colors.blue}
            startOpacity={0.6}
            endOpacity={0.2}
            thickness={2}
          />
        </View>
        <View>
          <Text style={styles.text}>
            78% of men notice their initial visible improvements within four
            weeks and achieve sustained success after three months.
          </Text>
        </View>
      </View>
      <ButtonOriginal
        title="Continue"
        onPress={() => navigation.navigate('Step2')}
      />
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
  chart: {
    position: 'relative',
    left: -30,
    width: 360,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Baloo400',
    fontSize: 17,
    lineHeight: 26,
    color: colors.color,
    textAlign: 'center',
    marginTop: 10,
  },
})
