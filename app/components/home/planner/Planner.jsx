import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Totals from './components/Totals'
import Allocation from './components/Allocation'
import Expected from './components/Expected'
import { LG, horizontalScreen, verticalScreen } from '../../Settings'

export default function Planner(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Planner</Text>
    
      <Totals />
      
      <Allocation outerSets={{page: props.outerSets.page}} />

      <Expected outerSets={{page: props.outerSets.page}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScreen * 0.035,
    paddingVertical: verticalScreen * 0.025,
    width: 'auto',
  },
  h1: {
    marginLeft: 15,
    fontSize: 28  ,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },
})