import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionsList from '@/components/steps/OptionsList'

const options = [
  { label: 'Fast food', value: 'option1' },
  { label: 'Sweets', value: 'option2' },
  { label: 'Carbonated beverages', value: 'option3' },
  { label: 'High-calorie snacks', value: 'option4' },
]

type ParamsList = {
  Step6: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step6'>

export default function Step5({ navigation }: { navigation: NavProps }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleSelect = (values: string[]) => {
    setSelectedValues(values)
  }

  return (
    <Layout
      heading="What type of foods do you enjoy the least?"
      subheading="Choose one or more options"
      onContinue={() =>
        selectedValues.length > 0 && navigation.navigate('Step6')
      }
      isContinueDisabled={selectedValues.length === 0}
    >
      <OptionsList
        options={options}
        selectedValues={selectedValues}
        onSelect={handleSelect}
      />
    </Layout>
  )
}
