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
import colors from '@/utils/colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo400: Baloo2_400Regular,
    Baloo500: Baloo2_500Medium,
    Baloo600: Baloo2_600SemiBold,
    Baloo700: Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <Navigator />
        <StatusBar />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 22,
    paddingBottom: 50,
  },
})
