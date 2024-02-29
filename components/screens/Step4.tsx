import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Vegetables', value: 'option1' },
  { label: 'Fruits', value: 'option2' },
  { label: 'Meat', value: 'option3' },
  { label: 'Dairy products', value: 'option4' },
  { label: 'Grains', value: 'option5' },
]

type ParamsList = {
  Step4: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step4'>

export default function Step4({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Layout
      heading="What type of foods do you enjoy the most?"
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
