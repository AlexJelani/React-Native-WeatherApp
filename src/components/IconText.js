import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  }
})
