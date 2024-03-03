import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '@/components/screens/HomeScreen'
import Step1 from '@/components/screens/Step1'
import Step2 from '@/components/screens/Step2'
import Step3 from '@/components/screens/Step3'
import Step4 from '@/components/screens/Step4'
import Step5 from '@/components/screens/Step5'
import Step6 from '@/components/screens/Step6'
import StatScreen from '@/components/screens/StatScreen'
import colors from '@/utils/colors'

type RootStackParamList = {
  Home: undefined
  Step1: undefined
  StatScreen: undefined
  Step2: undefined
  Step3: undefined
  Step4: undefined
  Step5: undefined
  Step6: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Navigator() {
  return (
    <View style={styles.navigatorContainer}>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () =>
            navigation.canGoBack() && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back-circle-outline"
                  size={34}
                  color={colors.color}
                />
              </TouchableOpacity>
            ),
          headerTitle: '',
          headerTintColor: colors.color,
          headerStyle: {
            backgroundColor: colors.background,
          },
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Step1"
          component={Step1}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>1/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
        <Stack.Screen name="StatScreen" component={StatScreen} />
        <Stack.Screen
          name="Step2"
          component={Step2}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>2/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
        <Stack.Screen
          name="Step3"
          component={Step3}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>3/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
        <Stack.Screen
          name="Step4"
          component={Step4}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>4/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
        <Stack.Screen
          name="Step5"
          component={Step5}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>5/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
        <Stack.Screen
          name="Step6"
          component={Step6}
          options={() => ({
            headerRight: () => <Text style={styles.steps}>6/14</Text>,
            headerRightContainerStyle: {
              paddingRight: 10,
            },
          })}
        />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
  },
  steps: {
    fontFamily: 'Baloo400',
    color: colors.color,
    fontSize: 16,
  },
})
