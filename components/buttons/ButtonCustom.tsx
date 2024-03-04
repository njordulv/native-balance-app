import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import colors from '@/utils/colors'

type Props = {
  title: string
  mode: 'outlined' | 'contained'
  disabled?: boolean
  onPress: () => void
}

const ButtonCustom = ({ title, mode, disabled, onPress }: Props) => {
  const buttonStyle = [styles.button, styles[mode], disabled && styles.disabled]

  return (
    <Button
      style={buttonStyle}
      mode={mode}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    color: colors.white,
    borderColor: colors.purple,
    borderWidth: 3,
    borderRadius: 28,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: colors.white,
    fontFamily: 'Baloo500',
    fontSize: 22,
    lineHeight: 33,
  },
  outlined: {
    backgroundColor: 'transparent',
  },
  contained: {
    backgroundColor: colors.purple,
    color: colors.white,
  },
  disabled: {
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
})

export default ButtonCustom
