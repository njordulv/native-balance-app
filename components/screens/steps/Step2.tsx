import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Weight loss', value: 'option1', icon: 'scale-bathroom' },
  { label: 'Muscle gain', value: 'option2', icon: 'arm-flex' },
  {
    label: 'Maintaining current weight',
    value: 'option3',
    icon: 'notebook-outline',
  },
  {
    label: 'Improving overall health',
    value: 'option4',
    icon: 'heart-plus-outline',
  },
]

type ParamsList = {
  Step3: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step3'>

export default function Step2({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Layout
      heading="What is your goal with regard to weight management?"
      subheading="Identify one key goal"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step3')}
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
