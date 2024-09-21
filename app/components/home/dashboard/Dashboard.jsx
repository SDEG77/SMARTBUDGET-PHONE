import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import Totals from './components/Totals'
import Summary from './components/Summary'
import Transactions from './components/Transactions'
import { horizontalScreen, verticalScreen, LG } from '../../Settings'

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.h1}>Dashboard</Text>
      <LinearGradient style={styles.infoDiv} colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false}>

        <View style={styles.img}/>

        <View style={styles.infoTexts}>
          <Text style={styles.h2}>John Ferry Santiago</Text>
          <Text style={{...styles.p, marginBottom: 5}}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.p}>PHINMA Araullo University</Text>
        </View>
      </LinearGradient>
      
      <Totals />

      <View style={styles.lineChart}></View>  

      <Summary />

      <Transactions />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 15,
  },

  infoDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: -10,
    marginBottom: 20,
    width: horizontalScreen * 0.89,
    paddingVertical: verticalScreen * 0.012,
  },
  img: {
    borderRadius: 19,
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  infoTexts: {
    width:205,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 9,
  },
  p: {
    color: 'white',
    fontSize: 12,
  },

  lineChart: {
    width: horizontalScreen * 0.84,
    height: verticalScreen *0.35,
    backgroundColor: 'red',
    borderRadius: 20,
    marginBottom: 20,
  },
})