import { View, StyleSheet } from 'react-native'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type Props = {
  heading: string
  children: React.ReactNode
  onContinue: () => void
  isContinueDisabled: boolean
}

const Layout = ({
  heading,
  children,
  onContinue,
  isContinueDisabled,
}: Props) => {
  return (
    <View style={styles.container}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        {heading}
      </GradientText>
      <View style={styles.content}>
        {children}
        <ButtonOriginal
          title="Continue"
          onPress={onContinue}
          disabled={isContinueDisabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    paddingBottom: 50,
    paddingTop: 15,
  },
  heading: {
    fontFamily: 'Baloo500',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  content: {
    width: '100%',
  },
})

export default Layout
