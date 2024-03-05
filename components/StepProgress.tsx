import { useState, useRef, useEffect } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type ProgProps = {
  step: number
  steps: number
  height: number
}

export default function StepProgress({ step, steps, height }: ProgProps) {
  const [width, setWidth] = useState(0)
  const animatedValue = useRef(new Animated.Value(-1000)).current
  const indicator = useRef(new Animated.Value(-1000)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: indicator,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [])

  useEffect(() => {
    indicator.setValue(-width + (width * step) / steps)
  }, [step, width])

  return (
    <View style={styles.container}>
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
        ></Animated.View>
      </View>
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
