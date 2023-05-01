import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import useGetWeather from './hooks/useGetWeather';
export default function App() {
  const { loading, error, weather } = useGetWeather();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

