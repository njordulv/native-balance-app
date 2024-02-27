import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/components/Homescreen'
import QuizScreen from '@/components/QuizScreen'

const Stack = createNativeStackNavigator()

export default function Navigator() {
  return (
    <View style={styles.navigatorContainer}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
    marginTop: 60,
  },
})
