import React,{useState} from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

export default function App() {

  const [loading, setLoading] = useState(false)
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1
  }
})