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
    minWidth: 288,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.purple,
    color: colors.white,
    borderColor: colors.purple,
    borderWidth: 3,
    borderRadius: 14,
    marginTop: 30,
  },
  text: {
    color: colors.white,
    fontFamily: 'Baloo500',
    fontSize: 22,
  },
})
