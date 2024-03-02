import { View, StyleSheet } from 'react-native'
import Option from '@/components/steps/Option'

type OptionType = {
  label: string
  value: string
}

type Props = {
  options: OptionType[]
  selectedValues: string[]
  onSelect: (values: string[]) => void
}

const OptionsList = ({ options, selectedValues, onSelect }: Props) => {
  const handleSelect = (value: string) => {
    let newSelectedValues = []
    if (selectedValues.includes(value)) {
      newSelectedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== value
      )
    } else {
      newSelectedValues = [...selectedValues, value]
    }
    onSelect(newSelectedValues)
  }

  return (
    <View style={styles.wrapper}>
      {options.map((option) => (
        <Option
          key={option.value}
          label={option.label}
          selected={selectedValues.includes(option.value)}
          onSelect={() => handleSelect(option.value)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    gap: 15,
    marginBottom: 15,
  },
})

export default OptionsList
