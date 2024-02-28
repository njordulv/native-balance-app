import { View, Image, StyleSheet } from 'react-native'

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
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    width: 80,
    height: 80,
  },
})
