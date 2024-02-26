import { View, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'
import GradientText from './components/GradientText'
import colors from './utils/colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <GradientText
          style={styles.heading}
          colors={[colors.purple, colors.blue]}
        >
          Welcome to the Native Balance App
        </GradientText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27272b',
  },
  heading: {
    fontFamily: 'Baloo2_500Medium',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
