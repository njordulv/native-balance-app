import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import { Text, View, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { AnimatedLabel } from '@/animations/AnimatedLabel'
import { AnimatedPoints } from '@/animations/AnimatedPoints'
import { useSelector } from '@/redux/store'
import { selectGender } from '@/slices/stepSlice'
import { randomValues } from '@/utils/functions'
import GradientText from '@/components/GradientText'
import ButtonCustom from '@/components/buttons/ButtonCustom'
import colors from '@/utils/colors'

type ParamsList = {
  Step2: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step2'>

export default function Statistic({ navigation }: { navigation: NavProps }) {
  const gender = useSelector(selectGender)
  useStepProgress({ step: 0, visible: false })

  const dataPointStart = () => {
    return <AnimatedPoints delay={200} pointStyle={styles.point2} />
  }

  const dataPoint1 = () => {
    return <AnimatedPoints delay={1600} pointStyle={styles.point1} />
  }

  const dataPoint2 = () => {
    return <AnimatedPoints delay={1800} pointStyle={styles.point2} />
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

  const labelOne = () => (
    <AnimatedLabel
      delay={1700}
      labelStyle={styles.label1}
      dotStyle={styles.dot1}
      text="Restrictive diets"
    />
  )

  const labelTwo = () => (
    <AnimatedLabel
      delay={1900}
      labelStyle={styles.label2}
      dotStyle={styles.dot2}
      text="RN Balance"
    />
  )

  const data1 = [
    {
      value: 60,
      customDataPoint: dataPointDefault,
    },
    { value: 58, customDataPoint: dataPointDefault },
    { value: randomValues(49, 53), customDataPoint: dataPointDefault },
    { value: randomValues(58, 64), customDataPoint: dataPointDefault },
    { value: randomValues(53, 57), customDataPoint: dataPointDefault },
    {
      value: randomValues(73, 78),
      labelComponent: labelTwo,
      customDataPoint: dataPointDefault,
    },
    {
      value: randomValues(79, 85),
      labelComponent: labelOne,
      customDataPoint: dataPoint1,
    },
  ]

  const data2 = [
    { value: 60, customDataPoint: dataPointStart },
    { value: 54, customDataPoint: dataPointDefault },
    { value: 36, customDataPoint: dataPointDefault },
    { value: 33, customDataPoint: dataPointDefault },
    { value: randomValues(28, 31), customDataPoint: dataPointDefault },
    { value: randomValues(24, 27), customDataPoint: dataPointDefault },
    {
      value: randomValues(21, 24),
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
            noOfSections={5}
            animationDuration={2000}
            initialSpacing={7}
            width={350}
            height={220}
            data={data1}
            data2={data2}
            rulesColor={colors.dark}
            color1={colors.purple}
            color2={colors.blue}
            startFillColor1={colors.purple}
            startFillColor2={colors.blue}
            endFillColor1={colors.purple}
            endFillColor2={colors.blue}
            startOpacity={0.9}
            endOpacity={0.2}
            thickness={2}
            yAxisTextStyle={{ color: colors.grey, fontSize: 12 }}
            yAxisColor={colors.background}
            xAxisColor={colors.background}
          />
        </View>
        <View>
          <Text style={styles.text}>
            78% of {gender} notice their initial visible improvements within
            four weeks and achieve sustained success after three months.
          </Text>
        </View>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 22 }}>
        <ButtonCustom
          title="Continue"
          mode="contained"
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
    backgroundColor: colors.backgroundDarker,
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 25,
  },
  content: {
    width: '100%',
    paddingHorizontal: 22,
  },
  chart: {
    marginTop: 20,
    left: -10,
  },
  point1: {
    backgroundColor: colors.purple,
    borderColor: colors.backgroundDarker,
  },
  point2: {
    backgroundColor: colors.blue,
    borderColor: colors.backgroundDarker,
  },
  label1: {
    width: 120,
    bottom: 105,
    right: 37,
  },
  label2: {
    width: 90,
    bottom: 20,
    right: -16,
  },
  dot1: {
    backgroundColor: colors.purple,
  },
  dot2: {
    backgroundColor: colors.blue,
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
