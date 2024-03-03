import { Text, View, StyleSheet } from 'react-native'
import ButtonOriginal from '@/components/buttons/ButtonOriginal'
import GradientText from '@/components/GradientText'
import colors from '@/utils/colors'

type Props = {
  heading: string
  subheading?: string
  children: React.ReactNode
  isContinueDisabled: boolean
  onContinue: () => void
}

const Layout = ({
  heading,
  subheading,
  children,
  isContinueDisabled,
  onContinue,
}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          {heading}
        </GradientText>
        <Text style={styles.subheading}>{subheading}</Text>
      </View>
      <View style={styles.content}>
        {children}
        <ButtonOriginal
          title="Continue"
          disabled={isContinueDisabled}
          onPress={onContinue}
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
  subheading: {
    fontFamily: 'Baloo400',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.grey,
    marginTop: 10,
  },
  content: {
    width: '100%',
  },
})

export default Layout
