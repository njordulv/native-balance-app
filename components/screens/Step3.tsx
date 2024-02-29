import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Three times a day', value: 'option1' },
  { label: 'More than three times a day', value: 'option2' },
  { label: 'Once a day', value: 'option3' },
  { label: 'Less than once a day', value: 'option4' },
]

type ParamsList = {
  Step4: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step4'>

export default function Step3({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Layout
      heading="How many full meals do you have during the day?"
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
