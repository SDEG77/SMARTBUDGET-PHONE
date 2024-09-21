import { View } from 'react-native'
import React from 'react'

export default function vr({ height = 20, width = 2, backgroundColor = 'white' }) {
  return (
    <View style={{height: height, width: width, backgroundColor: backgroundColor}}/>
  )
}