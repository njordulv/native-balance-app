import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useDispatch } from '@/redux/store'
import { setStep } from '@/slices/stepSlice'
import Layout from '@/components/steps/Layout'
import OptionList from '@/components/steps/OptionList'

const options = [
  { label: 'Yes, regularly', value: 'option1', icon: 'dice-5' },
  { label: 'Occasionally', value: 'option2', icon: 'dice-1' },
  { label: 'No, not at all', value: 'option3', icon: 'cancel' },
]

type ParamsList = {
  Step10: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step10'>

export default function Step9({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(9))
    }, [dispatch])
  )

  return (
    <Layout
      heading="How do you handle stress and emotional eating?"
      subheading="Choose one option"
      onContinue={() => selectedValue !== '' && navigation.navigate('Step10')}
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
