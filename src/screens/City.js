import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
         <View style={styles.populationWrapper}>
            <Feather name={'user'} size={50} color={'red'} />
            <Text style={styles.populationText}>8000</Text>
         </View>
         <View>
            <Feather/>
            <Text></Text>
            <Feather/>
            <Text></Text>
         </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 7.5
  }
})
