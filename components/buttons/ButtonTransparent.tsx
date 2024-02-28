import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type Props = {
  title: string
  disabled: boolean
  onPress: () => void
}

const ButtonTransparent = ({ title, onPress, disabled }: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: colors.white,
    borderColor: colors.purple,
    borderWidth: 3,
    borderRadius: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: colors.white,
    fontFamily: 'Baloo500',
    fontSize: 22,
  },
  pressed: {
    backgroundColor: colors.purple,
    color: colors.purple,
    opacity: 1,
  },
  disabled: {
    opacity: 0.5,
  },
})

export default ButtonTransparent
