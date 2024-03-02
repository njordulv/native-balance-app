import { View, StyleSheet } from 'react-native'
import Option from '@/components/steps/Option'

type OptionType = {
  label: string
  value: string
  name?: string
}

type Props = {
  options: OptionType[]
  selectedValue: string
  onSelect: (value: string) => void
}

const OptionList = ({ options, selectedValue, onSelect }: Props) => {
  return (
    <View style={styles.wrapper}>
      {options.map((option) => (
        <Option
          key={option.value}
          label={option.label}
          selected={selectedValue === option.value}
          onSelect={() => onSelect(option.value)}
          iconName={option.name}
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

export default OptionList
