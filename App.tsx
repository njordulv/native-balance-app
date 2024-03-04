import { View, StatusBar } from 'react-native'
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { store } from 'lib/redux/store'
import Navigator from '@/components/Navigator'

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
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <Navigator />
            <StatusBar barStyle="light-content" />
          </View>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}
