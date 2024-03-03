import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenParams, ScreenItems } from 'types/screens'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '@/components/screens/HomeScreen'
import StatScreen from '@/components/screens/StatScreen'
import Step1 from '@/components/screens/Step1'
import Step2 from '@/components/screens/Step2'
import Step3 from '@/components/screens/Step3'
import Step4 from '@/components/screens/Step4'
import Step5 from '@/components/screens/Step5'
import Step6 from '@/components/screens/Step6'
import Step7 from '@/components/screens/Step7'
import Step8 from '@/components/screens/Step8'
import Step9 from '@/components/screens/Step9'
import Step10 from '@/components/screens/Step10'
import Step11 from '@/components/screens/Step11'
import colors from '@/utils/colors'

const SCREENS: ScreenItems[] = [
  { name: 'Home', component: HomeScreen },
  { name: 'Step1', component: Step1, step: '1/14' },
  { name: 'StatScreen', component: StatScreen },
  { name: 'Step2', component: Step2, step: '2/14' },
  { name: 'Step3', component: Step3, step: '3/14' },
  { name: 'Step4', component: Step4, step: '4/14' },
  { name: 'Step5', component: Step5, step: '5/14' },
  { name: 'Step6', component: Step6, step: '6/14' },
  { name: 'Step7', component: Step7, step: '7/14' },
  { name: 'Step8', component: Step8, step: '8/14' },
  { name: 'Step9', component: Step9, step: '9/14' },
  { name: 'Step10', component: Step10, step: '10/14' },
  { name: 'Step11', component: Step11, step: '11/14' },
]

const Stack = createNativeStackNavigator<ScreenParams>()

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
          headerStyle: { backgroundColor: colors.background },
          headerRightContainerStyle: { paddingRight: 10 },
        })}
      >
        {SCREENS.map(({ name, component, step }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={
              step
                ? {
                    headerRight: () => <Text style={styles.steps}>{step}</Text>,
                  }
                : {}
            }
          />
        ))}
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
