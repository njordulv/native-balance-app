import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import Layout from '@/components/steps/Layout'
import OptionsList from '@/components/steps/OptionsList'

const options = [
  { label: 'Keto diet', value: 'option1', icon: 'sprout' },
  { label: 'Low-carb diet', value: 'option2', icon: 'pot-steam' },
  { label: 'Water fasting', value: 'option3', icon: 'cup' },
  { label: 'Vegetarianism', value: 'option4', icon: 'leaf' },
]

type ParamsList = {
  Step8: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step8'>

export default function Step7({ navigation }: { navigation: NavProps }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  useStepProgress({ step: 7, visible: true })

  const handleSelect = (values: string[]) => {
    setSelectedValues(values)
  }

  return (
    <Layout
      heading="Which weight loss methods or diets have you previously tried?"
      subheading="Choose one or more options"
      onContinue={() =>
        selectedValues.length > 0 && navigation.navigate('Step8')
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
