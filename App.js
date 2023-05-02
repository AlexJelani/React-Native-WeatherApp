import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import useGetWeather from './hooks/useGetWeather';
export default function App() {
  const { loading, error, weather } = useGetWeather();
  console.log(loading, error, weather)
  console.log(loading, error, weather)

  if(weather && weather.list) {
    return (
      <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
    )
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

 
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

