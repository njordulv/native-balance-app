import { useState, useEffect, useRef } from 'react'
import { Animated, View, StyleProp, ViewStyle, StyleSheet } from 'react-native'

type AnimatedPointProps = {
  delay: number
  pointStyle: StyleProp<ViewStyle>
}

export const AnimatedPoints = ({ delay, pointStyle }: AnimatedPointProps) => {
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
      <View style={[styles.point, pointStyle]}></View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  point: {
    width: 16,
    height: 16,
    borderWidth: 4,
    borderRadius: 10,
  },
})
