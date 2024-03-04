export type ScreenParams = {
  Home: undefined
  Statistic: undefined
  Step1: undefined
  Step2: undefined
  Step3: undefined
  Step4: undefined
  Step5: undefined
  Step6: undefined
  Step7: undefined
  Step8: undefined
  Step9: undefined
  Step10: undefined
  Step11: undefined
}

export type ScreenItems = {
  name: keyof ScreenParams
  component: React.ComponentType<any>
  step?: string
  headerStyle?: any
}
