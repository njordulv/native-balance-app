import React, { useState, useEffect, useRef } from 'react'
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import colors from '@/utils/colors'

type AnimatedLabelProps = {
  delay: number
  labelStyle: StyleProp<ViewStyle>
  dotStyle: StyleProp<ViewStyle>
  text: string
}

export const AnimatedLabel = ({
  delay,
  labelStyle,
  dotStyle,
  text,
}: AnimatedLabelProps) => {
  const [visible, setVisible] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.25)).current

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
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
      <View style={labelStyle}>
        <View style={dotStyle}></View>
        <Text style={styles.labelText}>{text}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Baloo500',
    fontSize: 13,
    lineHeight: 24,
    color: colors.color,
  },
})
