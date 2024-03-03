import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  {
    label: 'Not motivated at all',
    value: 'option1',
    icon: 'cancel',
  },
  {
    label: 'Slightly motivated',
    value: 'option2',
    icon: 'dice-1',
  },
  {
    label: 'Moderately motivated',
    value: 'option3',
    icon: 'dice-3',
  },
  {
    label: 'Highly motivated',
    value: 'option4',
    icon: 'dice-4',
  },
  {
    label: 'Extremely motivated',
    value: 'option5',
    icon: 'dice-5',
  },
]

type ParamsList = {
  Step12: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step12'>

export default function Step11({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Layout
      heading="How motivated are you to make changes to your diet and lifestyle for weight management?"
      subheading="Select your motivation"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step12')}
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
