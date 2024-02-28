import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

type OptionProps = {
  label: string
  selected: boolean
  onSelect: () => void
}

const Option = ({ label, selected, onSelect }: OptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.option, selected ? styles.selected : null]}
      onPress={onSelect}
    >
      <Text style={[styles.optionText, selected ? styles.selectedText : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.purpleLight,
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  optionText: {
    fontSize: 17,
    color: colors.white,
    fontFamily: 'Baloo400',
  },
  selectedText: {
    color: colors.white,
  },
})

export default Option
