import { Text, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LineChart } from 'react-native-gifted-charts'
import GradientText from '@/components/GradientText'
import ButtonOriginal from '../buttons/ButtonOriginal'
import { AnimatedLabel } from '../animations/AnimatedLabel'
import { AnimatedPoints } from '../animations/AnimatedPoints'
import colors from '@/utils/colors'

type ParamsList = {
  Step2: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step2'>

export default function StatScreen({ navigation }: { navigation: NavProps }) {
  const dataPointStart = () => {
    return <AnimatedPoints delay={100} labelStyle={styles.point2} />
  }

  const dataPoint1 = () => {
    return <AnimatedPoints delay={1600} labelStyle={styles.point1} />
  }

  const dataPoint2 = () => {
    return <AnimatedPoints delay={1800} labelStyle={styles.point2} />
  }

  const dataPointDefault = () => {
    return (
      <View
        style={{
          display: 'none',
        }}
      />
    )
  }

  const Label1 = () => (
    <AnimatedLabel
      delay={1700}
      labelStyle={styles.label1}
      dotStyle={styles.dot1}
      text="Restrictive diets"
    />
  )

  const Label2 = () => (
    <AnimatedLabel
      delay={1900}
      labelStyle={styles.label2}
      dotStyle={styles.dot2}
      text="RN Balance"
    />
  )

  const data1 = [
    { value: 60, customDataPoint: dataPointDefault },
    { value: 58, customDataPoint: dataPointDefault },
    { value: 49, customDataPoint: dataPointDefault },
    { value: 63, customDataPoint: dataPointDefault },
    { value: 55, customDataPoint: dataPointDefault },
    {
      value: 82,
      labelComponent: Label2,
      customDataPoint: dataPointDefault,
    },
    {
      value: 85,
      labelComponent: Label1,
      customDataPoint: dataPoint1,
    },
  ]

  const data2 = [
    { value: 60, customDataPoint: dataPointStart },
    { value: 54, customDataPoint: dataPointDefault },
    { value: 37, customDataPoint: dataPointDefault },
    { value: 33, customDataPoint: dataPointDefault },
    { value: 31, customDataPoint: dataPointDefault },
    { value: 24, customDataPoint: dataPointDefault },
    {
      value: 23,
      customDataPoint: dataPoint2,
    },
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
            animationDuration={2000}
            height={220}
            spacing={52}
            data={data1}
            data2={data2}
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
      <View style={{ width: '100%', paddingHorizontal: 22 }}>
        <ButtonOriginal
          title="Continue"
          onPress={() => navigation.navigate('Step2')}
        />
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
    paddingBottom: 50,
    paddingTop: 15,
  },
  content: {
    width: '100%',
  },
  chart: {
    position: 'relative',
    left: -25,
  },
  point1: {
    width: 18,
    height: 18,
    backgroundColor: colors.red,
    borderColor: colors.background,
    borderWidth: 4,
    borderRadius: 10,
  },
  point2: {
    width: 18,
    height: 18,
    backgroundColor: colors.blue,
    borderColor: colors.background,
    borderWidth: 4,
    borderRadius: 10,
  },
  label1: {
    position: 'absolute',
    width: 120,
    bottom: 105,
    right: 37,
    backgroundColor: colors.transparentDark,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  label2: {
    position: 'absolute',
    width: 90,
    bottom: 20,
    right: -16,
    backgroundColor: colors.transparentDark,
    paddingHorizontal: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 15,
    overflow: 'hidden',
    zIndex: 2,
  },
  dot1: {
    backgroundColor: colors.red,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  dot2: {
    backgroundColor: colors.blue,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    paddingHorizontal: 22,
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
