import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { horizontalScreen, LG } from '../../../Settings'
import Vr from '../../../general_comps/vr'

export default function Totals() {
  return (
    <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
      <View style={styles.duo}>
        <Text style={styles.main}>350,000.00</Text>
        <Text style={styles.secondary} >Target Income</Text>
      </View>

      <Vr height={39} />

      <View style={styles.duo}>
        <Text style={styles.main}>500,000.00</Text>
        <Text style={styles.secondary}>Expected Income</Text>
      </View>

      <Vr height={39} />

      <View style={styles.duo}>
        <Text style={styles.main}>150,000.00</Text>
        <Text style={styles.secondary}>Balance Variant</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: horizontalScreen * 0.865,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 18,
    marginBottom: 30,
  },
  duo: {
    alignItems: 'center',
  },
  main: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  secondary: {
    fontSize: 11,
    marginTop: -2,
    color: 'white',
  },
})