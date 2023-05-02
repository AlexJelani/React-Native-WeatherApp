import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color={'white'} />
      <View styles={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)} / ${Math.round(max)}°`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    fontSize: 20,
    color: 'white'
  },
  date: {
    fontSize: 15,
    color: 'white'
  },
  dateTextWrapper:{
    flexDirection: 'column',
  }
})
export default ListItem
