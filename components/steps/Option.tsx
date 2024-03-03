import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '@/utils/colors'

type OptionProps = {
  label: string
  selected: boolean
  icon?: string
  onSelect: () => void
}

const Option = ({ label, selected, icon, onSelect }: OptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.option, selected ? styles.selected : null]}
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <Text style={[styles.optionText, selected ? styles.selectedText : null]}>
        {label}
      </Text>
      {icon && <Icon name={icon} style={styles.icon} />}
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
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
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
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
})

export default Option
