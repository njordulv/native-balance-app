import { View, StatusBar, StyleSheet } from 'react-native'
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logo from '@/components/Logo'
import HomeScreen from '@/components/Homescreen'
import QuizScreen from '@/components/QuizScreen'
import colors from '@/utils/colors'

const Stack = createNativeStackNavigator()

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: colors.color,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitle: () => <Logo />,
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            headerTintColor: colors.color,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitle: () => <Logo />,
          }}
        />
      </Stack.Navigator>
      <View style={styles.container}>
        <StatusBar />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
})
