import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type ButtonProps = {
  title: string
  onPress: () => void
}

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    color: colors.white,
    fontSize: 21,
    minWidth: 288,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.purple,
    borderWidth: 3,
    borderColor: colors.purple,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
})
