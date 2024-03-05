import { useState, useRef, useEffect } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
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
  const indicator = useRef(new Animated.Value(-1000)).current

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
          <Text
            style={{
              fontFamily: 'Baloo400',
              color: colors.white,
              fontSize: 16,
              lineHeight: 22,
              alignSelf: 'flex-end',
            }}
          >
            {step} / {steps}
          </Text>
          <View
            onLayout={(e) => {
              const newWidth = e.nativeEvent.layout.width
              setWidth(newWidth)
            }}
            style={{
              height,
              borderRadius: height,
              backgroundColor: colors.blue,
              overflow: 'hidden',
            }}
          >
            <Animated.View
              style={{
                height,
                width: '100%',
                borderRadius: height,
                position: 'absolute',
                left: 0,
                top: 0,
                backgroundColor: colors.purple,
                transform: [{ translateX: animatedValue }],
              }}
            />
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
    gap: 5,
  },
})
