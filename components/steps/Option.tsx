import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/utils/colors'

type OptionProps = {
  label: string
  selected: boolean
  onSelect: () => void
  iconName?: any
}

const Option = ({ label, selected, iconName, onSelect }: OptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.option, selected ? styles.selected : null]}
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <Text style={[styles.optionText, selected ? styles.selectedText : null]}>
        {label}
      </Text>
      {iconName && <Ionicons name={iconName} style={styles.icon} />}
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
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    fontSize: 26,
    color: colors.color,
  },
})

export default Option
