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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            bodyText={'9000'}
            iconColor={'red'}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            bodyText={'10:46:58am'}
            iconColor={'white'}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            bodyText={'17:28:15pm'}
            iconColor={'white'}
            bodyTextStyles={styles.riseSetText}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 25,
    color: 'orange'
  }
})
