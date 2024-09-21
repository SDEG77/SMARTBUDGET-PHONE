import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { horizontalScreen, verticalScreen } from '../../../Settings';

export default function Totals() {
  return (
    <View style={styles.totalDivs}>
      <View style={styles.totalDiv}>
        <View style={styles.totalBar}></View>
        <Text style={styles.totalCount}>30,000.00</Text>
        <Text style={styles.label}>Total Expenses</Text>
      </View>
      
      <View style={styles.totalDiv}>
        <View style={styles.totalBar}></View>
        <Text style={styles.totalCount}>35,000.00</Text>
        <Text style={styles.label}>Total Income</Text>
      </View>

      <View style={styles.totalDiv}>
        <View style={styles.totalBar}></View>
        <Text style={styles.totalCount}>5,000.00</Text>
        <Text style={styles.label}>Balance</Text>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  totalDivs: {
    marginLeft: -10,
    marginBottom: 20,
    width: horizontalScreen * 0.9,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'nowrap',
  },
  totalDiv: {
    borderRadius: 15,
    backgroundColor: '#e1dfdf',
    elevation: 4,
    width: horizontalScreen * 0.276,
    height: verticalScreen * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalBar: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
  },
  totalCount: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },
})