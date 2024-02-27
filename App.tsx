import { View, StatusBar, StyleSheet } from 'react-native'
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from '@/components/Navigator'

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigator />
        <StatusBar />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
