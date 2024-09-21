import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../../../general_comps/Input'
import BackBtn from '../../../general_comps/BackBtn'
import Break from '../../../general_comps/Break'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, horizontalScreen, verticalScreen } from '../../../Settings'

export default function UpdateAllocation(props) {
  const categories = ['Food', 'Rent' , 'Transpo', 'Debt/Loan', 'Shopping', 'Mobile', 'Savings', 'Others'];
  const set = {
    placeholder: 'Enter Amount',
    fontSize: 13,
    width: 120,
    height: 33,
    center: true,
    marginBottom: 0,
  };

  return (
    <View style={styles.container}>
      <BackBtn onPress={() => props.outerSets.page('planner')} size={55}/>
      <Text style={styles.h1}>Allocate Budget</Text>
      
      <Break size={40} />

      {categories.map((category, index) => (
        <View style={styles.duo} key={index}>
          <Text style={styles.label}>{category}</Text>

          <Input key={category}
            placeholder={set.placeholder} 
            fontSize={set.fontSize} 
            width={set.width} 
            height={set.height} 
            center={set.center} 
            marginBottom={set.marginBottom} />
        </View>
      ))}

      <Break size={45} />

      <TouchableOpacity activeOpacity={0.75}>
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
          <Text style={styles.text}> SAVE </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 1,
  },
  duo: {
    width: horizontalScreen * 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  gradient: {
    paddingHorizontal: horizontalScreen * 0.27,
    paddingVertical: verticalScreen * 0.012,
    borderRadius: 15,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})