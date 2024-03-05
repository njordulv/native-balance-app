import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStepProgress } from '@/hooks/useStepProgress'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'No', value: 'option1', icon: 'cancel' },
  { label: 'Diabetes', value: 'option2', icon: 'pill' },
  { label: 'Thyroid issues', value: 'option3', icon: 'stethoscope' },
  { label: 'Heart problems', value: 'option4', icon: 'heart-broken' },
  { label: 'Kidney problems', value: 'option5', icon: 'heart-broken-outline' },
]

type ParamsList = {
  Step7: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step7'>

export default function Step6({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')
  useStepProgress({ step: 6, visible: true })

  return (
    <Layout
      heading="Do you have any medical conditions or dietary restrictions that may affect your weight loss plan?"
      subheading="Choose one key condition"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step7')}
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
