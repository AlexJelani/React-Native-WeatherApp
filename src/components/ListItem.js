import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Feather from "react-native-vector-icons/Feather"

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const {item, date, temp} = styles
    return (
      <View style={item}>
        <Feather name={'sun'} size={50} color={'white'} />
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
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
  })
  export default ListItem