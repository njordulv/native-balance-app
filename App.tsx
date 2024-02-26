import { useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import GradientText from './components/GradientText'
import colors from './utils/colors'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Baloo2-Regular': require('./assets/fonts/Baloo2-Regular.ttf'),
    'Baloo2-Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
    'Baloo2-Medium': require('./assets/fonts/Baloo2-Medium.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <GradientText
        style={styles.heading}
        colors={[colors.purple, colors.blue]}
      >
        Welcome to the Native Balance App
      </GradientText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27272b',
  },
  heading: {
    fontFamily: 'Baloo2-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 30,
  },
})
