import React from 'react'
import { Text, TextProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

interface GradientTextProps extends TextProps {
  colors: string[]
  start?: { x: number; y: number }
  end?: { x: number; y: number }
}

const GradientText: React.FC<GradientTextProps> = ({
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  ...props
}) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={colors} start={start} end={end}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText
