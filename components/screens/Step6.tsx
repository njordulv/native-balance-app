import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'No', value: 'option1' },
  { label: 'Diabetes', value: 'option2' },
  { label: 'Thyroid issues', value: 'option3' },
  { label: 'Heart problems', value: 'option4' },
  { label: 'Kidney problems', value: 'option5' },
]

type ParamsList = {
  Step7: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step7'>

export default function Step3({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

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
