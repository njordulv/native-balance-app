import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opened 3</Text>
      <Text style={styles.text2}>Opened 4</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27272b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'tomato',
    fontSize: 25,
  },
  text2: {
    color: 'coral',
    fontSize: 22,
  },
})
