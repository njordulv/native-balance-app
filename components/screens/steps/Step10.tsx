import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  {
    label: 'Sedentary (little to no exercise)',
    value: 'option1',
    icon: 'dice-1',
  },
  {
    label: 'Lightly active (light exercise or sports 1-3 days a week)',
    value: 'option2',
    icon: 'dice-2',
  },
  {
    label: 'Moderately active (moderate exercise or sports 3-5 days a week)',
    value: 'option3',
    icon: 'dice-3',
  },
  {
    label: 'Very active (hard exercise or sports 6-7 days a week)',
    value: 'option4',
    icon: 'dice-4',
  },
  {
    label: 'Extremely active (hard exercise or training twice a day)',
    value: 'option5',
    icon: 'dice-5',
  },
]

type ParamsList = {
  Step11: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step11'>

export default function Step10({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')
  useStepProgress({ step: 10, visible: true })

  return (
    <Layout
      heading="What is your level of physical activity?"
      subheading="Choose one option level"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step11')}
      isContinueDisabled={selectedValue === ''}
    >
      <OptionList
        options={options}
        selectedValue={selectedValue}
        onSelect={setSelectedValue}
      />
    </Layout>
  )
}
