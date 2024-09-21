import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Items from '../../dashboard/components/Items'
import { horizontalScreen, verticalScreen } from '../../../Settings'

export default function Allocation(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Budget Allocation</Text>

      <TouchableOpacity onPress={() => props.outerSets.page('updateAllocation')} activeOpacity={0.75} style={styles.iconDiv}>
        <FontAwesomeIcon  icon={faPenToSquare} color='white' size={18} />
      </TouchableOpacity>

      <View style={styles.allocationDiv}>
        <View style={styles.donut} />
        
        <View style={styles.itemDiv}>
          <View style={styles.duo}>
            <Items labels={['Food', 'Rent']} amounts={['80,000.00', '40,000.00']} />
            <Items labels={['Transpo.', 'Debt/Loan']} amounts={['80,000.00', '40,000.00']} />
          </View>

          <View style={styles.duo}>
            <Items labels={['Shopping', 'Mobile']} amounts={['80,000.00', '40,000.00']} />
            <Items labels={['Savings', 'School']} amounts={['80,000.00', '40,000.00']} />
          </View>
          
          <View style={{...styles.duo, alignSelf: 'center'}}>
            <Items labels={['Others']} amounts={['80,000.00']} half={true} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginBottom: 30,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  iconDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'green',
    padding: 9,
    borderRadius: 100,  
  },
  allocationDiv: {
    backgroundColor: '#f0f0f0',
    width: horizontalScreen * 0.85,
    alignSelf: 'center',
    paddingHorizontal: 3,
    paddingVertical: 16,
    borderRadius: 20,
    marginBottom: 5,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  duo: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 3,
  },
  donut: {
    width: 180,
    height: 180,
    backgroundColor: 'red',
  },
})