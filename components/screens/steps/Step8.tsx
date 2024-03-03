import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Yes, regularly', value: 'option1', icon: 'dumbbell' },
  { label: 'Occasionally', value: 'option2', icon: 'shoe-sneaker' },
  { label: 'No, not at all', value: 'option3', icon: 'cancel' },
]

type ParamsList = {
  Step9: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step9'>

export default function Step8({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Layout
      heading="Are you currently exercising or physically active?"
      subheading="Choose one key activity"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step9')}
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
