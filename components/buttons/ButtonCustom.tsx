import { StyleSheet } from 'react-native'
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
      labelStyle={styles.text}
      mode={mode}
      disabled={disabled}
      onPress={onPress}
    >
      {title}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    borderColor: colors.purple,
    borderWidth: 3,
    borderRadius: 28,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    width: '100%',
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
