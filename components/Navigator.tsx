import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenParams, ScreenItems } from 'types/screens'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/utils/colors'
import {
  Home,
  Statistic,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  Step11,
} from '@/components/screens'

const SCREENS: ScreenItems[] = [
  { name: 'Home', component: Home },
  { name: 'Step1', component: Step1, step: '1/14' },
  { name: 'Statistic', component: Statistic },
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
