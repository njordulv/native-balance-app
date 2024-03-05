import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import Layout from '@/components/steps/Layout'
import OptionsList from '@/components/steps/OptionsList'

const options = [
  { label: 'Vegetables', value: 'option1', icon: 'chili-mild' },
  { label: 'Fruits', value: 'option2', icon: 'fruit-cherries' },
  { label: 'Meat', value: 'option3', icon: 'food-drumstick' },
  { label: 'Dairy products', value: 'option4', icon: 'bottle-soda' },
  { label: 'Grains', value: 'option5', icon: 'barley' },
]

type ParamsList = {
  Step5: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step5'>

export default function Step4({ navigation }: { navigation: NavProps }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  useStepProgress({ step: 4, visible: true })

  const handleSelect = (values: string[]) => {
    setSelectedValues(values)
  }

  return (
    <Layout
      heading="What type of foods do you enjoy the most?"
      subheading="Choose one or more options"
      onContinue={() =>
        selectedValues.length > 0 && navigation.navigate('Step5')
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
