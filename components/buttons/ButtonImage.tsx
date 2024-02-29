import { useState } from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type Props = {
  title: string
  source: { uri: string } | number
  onPress: () => void
}

const ButtonImage = ({ title, source, onPress }: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableOpacity
      style={[styles.button, isPressed && styles.pressed]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image source={source} style={styles.image} resizeMode="contain" />
      <Text style={styles.caption}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: undefined,
    backgroundColor: colors.backgroundDarker,
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 14,
  },
  image: {
    width: 130,
    height: undefined,
    aspectRatio: 0.6,
  },
  caption: {
    fontFamily: 'Baloo500',
    fontSize: 22,
    lineHeight: 26,
    color: colors.color,
    textAlign: 'center',
    paddingTop: 20,
  },
  pressed: {
    borderColor: colors.purple,
    backgroundColor: colors.background,
    color: colors.purple,
    opacity: 1,
  },
})

export default ButtonImage
