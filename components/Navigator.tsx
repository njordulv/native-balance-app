import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenParams, ScreenItems } from 'types/screens'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderRight from './HeaderRight'
import Top from '@/components/Top'
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

const Stack = createNativeStackNavigator<ScreenParams>()

export default function Navigator() {
  const SCREENS: ScreenItems[] = [
    {
      name: 'Home',
      component: Home,
      headerStyle: { backgroundColor: colors.background },
    },
    { name: 'Step1', component: Step1 },
    {
      name: 'Statistic',
      component: Statistic,
      headerStyle: { backgroundColor: colors.backgroundDarker },
    },
    { name: 'Step2', component: Step2 },
    { name: 'Step3', component: Step3 },
    { name: 'Step4', component: Step4 },
    { name: 'Step5', component: Step5 },
    { name: 'Step6', component: Step6 },
    { name: 'Step7', component: Step7 },
    { name: 'Step8', component: Step8 },
    { name: 'Step9', component: Step9 },
    { name: 'Step10', component: Step10 },
    { name: 'Step11', component: Step11 },
  ]

  return (
    <View style={styles.navigatorContainer}>
      <Top />
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
          headerLargeTitleShadowVisible: false,
        })}
      >
        {SCREENS.map(({ name, component, headerStyle }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              headerRight: () => <HeaderRight />,
              headerStyle: headerStyle || {
                backgroundColor: colors.background,
              },
            }}
          />
        ))}
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
    position: 'relative',
  },
  steps: {
    fontFamily: 'Baloo400',
    color: colors.color,
    fontSize: 16,
  },
})
