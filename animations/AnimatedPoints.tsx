import { useState, useEffect, useRef } from 'react'
import { Animated, View, StyleProp, ViewStyle } from 'react-native'

type AnimatedPointProps = {
  delay: number
  labelStyle: StyleProp<ViewStyle>
}

export const AnimatedPoints = ({ delay, labelStyle }: AnimatedPointProps) => {
  const [visible, setVisible] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start()
    }, delay)

    return () => {
      clearTimeout(timer)
      fadeAnim.setValue(0)
      scaleAnim.setValue(0.3)
    }
  }, [delay])

  if (!visible) return null

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <View style={labelStyle}></View>
    </Animated.View>
  )
}
