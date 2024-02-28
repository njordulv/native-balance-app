import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import GradientText from '@/components/GradientText'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import colors from '@/utils/colors'

type LabelProps = {
  label: string
  selected: boolean
  onSelect: () => void
}

const CustomRadioButton = ({ label, selected, onSelect }: LabelProps) => (
  <TouchableOpacity
    style={[
      styles.radioButton,
      {
        backgroundColor: selected ? colors.green : 'transparent',
        borderColor: selected ? colors.green : colors.purpleLight,
      },
    ]}
    onPress={onSelect}
  >
    <Text
      style={[
        styles.radioButtonText,
        { color: selected ? colors.white : colors.white },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
)

type ParamsList = {
  Step2: undefined
}

type NavProps = StackNavigationProp<ParamsList, 'Step2'>

export default function Step1({ navigation }: { navigation: NavProps }) {
  const [selectedValue, setSelectedValue] = useState('')

  const buttonHandle = () => {
    if (selectedValue !== '') {
      navigation.navigate('Step2')
    }
  }

  return (
    <View style={styles.navigation}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        What is your goal with regard to weight management?
      </GradientText>
      <View style={styles.quizWrap}>
        <CustomRadioButton
          label="Weight loss"
          selected={selectedValue === 'option1'}
          onSelect={() => setSelectedValue('option1')}
        />
        <CustomRadioButton
          label="Muscle gain"
          selected={selectedValue === 'option2'}
          onSelect={() => setSelectedValue('option2')}
        />
        <CustomRadioButton
          label="Maintaining current weight"
          selected={selectedValue === 'option3'}
          onSelect={() => setSelectedValue('option3')}
        />
        <CustomRadioButton
          label="Improving overall health"
          selected={selectedValue === 'option4'}
          onSelect={() => setSelectedValue('option4')}
        />
        <View>
          <ButtonOriginal
            title="Continue"
            onPress={buttonHandle}
            disabled={selectedValue === ''}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    paddingBottom: 50,
    paddingTop: 15,
    gap: 30,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Baloo400',
    fontSize: 20,
    lineHeight: 26,
    color: colors.white,
    textAlign: 'center',
    marginTop: 20,
  },
  quizWrap: {
    display: 'flex',
    gap: 15,
  },
  radioButton: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.purpleLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 330,
  },
  radioButtonText: {
    fontFamily: 'Baloo400',
    fontSize: 17,
  },
})
