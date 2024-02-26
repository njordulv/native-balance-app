import { Image } from 'react-native'

export default function Logo() {
  return (
    <Image
      style={{ width: 60, height: 60 }}
      source={require('@/assets/logo.png')}
      resizeMode="contain"
    />
  )
}
