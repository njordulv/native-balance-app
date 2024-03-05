import { useState, useRef, useEffect } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '@/utils/colors'

type ProgProps = {
  step: number
  steps: number
  height: number
  visibility: boolean
}

export default function StepProgress({
  step,
  steps,
  height,
  visibility,
}: ProgProps) {
  const [width, setWidth] = useState(0)
  const animatedValue = useRef(new Animated.Value(-1000)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -width + (width * step) / steps,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [step, steps, width])

  return (
    <View style={styles.container}>
      {visibility && (
        <>
          <View style={styles.stepWrap}>
            <View>
              <Text style={styles.step}>{step}</Text>
            </View>
            <View>
              <Text style={styles.divider}>{'/'}</Text>
            </View>
            <View>
              <Text style={styles.steps}>{steps}</Text>
            </View>
          </View>
          <View
            onLayout={(e) => {
              const newWidth = e.nativeEvent.layout.width
              setWidth(newWidth)
            }}
            style={{
              height,
              borderRadius: height,
              backgroundColor: colors.dark,
              overflow: 'hidden',
            }}
          >
            <Animated.View
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                backgroundColor: colors.blue,
                height,
                borderRadius: height,
                transform: [{ translateX: animatedValue }],
              }}
            >
              <LinearGradient
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.purple, colors.blue]}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height,
                  borderRadius: height,
                }}
              ></LinearGradient>
            </Animated.View>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  stepWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignSelf: 'flex-end',
  },
  step: {
    fontFamily: 'Baloo500',
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
  },
  divider: {
    fontFamily: 'Baloo400',
    color: colors.grey,
    fontSize: 16,
    lineHeight: 20,
  },
  steps: {
    fontFamily: 'Baloo500',
    color: colors.grey,
    fontSize: 16,
    lineHeight: 20,
  },
})
