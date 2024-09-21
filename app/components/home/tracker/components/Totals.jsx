import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, verticalScreen, horizontalScreen } from '../../../Settings'
import Vr from '../../../general_comps/vr'

export default function Totals() {
  return (
    <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.parentDiv}>
      <View style={styles.childDiv}>
        <Text style={styles.amount} >30,000.00</Text>
        <Text style={styles.label}>Total Expenses</Text>
      </View>
      <Vr height={40} />
      <View style={styles.childDiv}>
        <Text style={styles.amount} >35,000.00</Text>
        <Text style={styles.label}>Total Income</Text>
      </View>
      <Vr height={40} />
      <View style={styles.childDiv}>
        <Text style={styles.amount} >5,000.00</Text>
        <Text style={styles.label}>Balance</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  parentDiv: {
    flexDirection: 'row',
    gap: 17,
    justifyContent: 'center',
    marginLeft: -6,
    width: horizontalScreen * 0.865,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 18,
    marginBottom: 20,
  },
  childDiv: {
    alignItems: 'center',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 11,
    marginTop: -2,
    color: 'white',
  },
})