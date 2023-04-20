import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  const {container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout} = styles
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            bodyText={'9000'}
            iconColor={'red'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            bodyText={'10:46:58am'}
            iconColor={'white'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            bodyText={'17:28:15pm'}
            iconColor={'white'}
            bodyTextStyles={riseSetText}
          />
         
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
    color: '#fff',
    textAlign: 'center',
  },
  populationWrapper: {
       justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5
  },
  riseSetWrapper: {
        justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 25,
    color: 'orange'
  },
  rowLayout: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  }
})
