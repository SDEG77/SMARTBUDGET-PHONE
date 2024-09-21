import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function FwdBtn({fontSize = 18}) {
  return (
    <Text style={{fontSize: fontSize}}>{'>'}</Text>
  )
}

export default FwdBtn

const styles = StyleSheet.create({

})