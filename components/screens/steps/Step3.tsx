import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Three times a day', value: 'option1', icon: 'dice-3' },
  { label: 'More than three times a day', value: 'option2', icon: 'dice-5' },
  { label: 'Once a day', value: 'option3', icon: 'dice-1' },
  { label: 'Less than once a day', value: 'option4', icon: 'cancel' },
]

type ParamsList = {
  Step4: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step4'>

export default function Step3({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')
  useStepProgress({ step: 3, visible: true })

  return (
    <Layout
      heading="How many full meals do you have during the day?"
      subheading="Choose one key meal"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step4')}
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
