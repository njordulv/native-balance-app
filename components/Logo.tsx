import { View, Image, StyleSheet } from 'react-native'
import colors from '@/utils/colors'

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('@/assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
  },
})
