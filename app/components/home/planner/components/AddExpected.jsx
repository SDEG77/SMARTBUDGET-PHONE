import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../general_comps/Input'
import BackBtn from '../../../general_comps/BackBtn'
import Break from '../../../general_comps/Break'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, horizontalScreen, verticalScreen } from '../../../Settings'
import Dropper from '../../../general_comps/Dropper'

export default function AddExpected(props) {
  const [income, setIncome] = useState('none');

  return (
    <View style={styles.container}>
      <BackBtn onPress={() => props.outerSets.page('planner')} size={55}/>
      <Text style={styles.h1}>Add Income</Text>
      
      <Break size={30} />


        <View style={styles.duo}>
          <Text style={styles.label}>Date</Text>
          <Input placeholder='July 24, 2024'/>
        </View>

        <View style={styles.duo}>
          <Text style={styles.label}>Source</Text>
          
          <Dropper 
            data={[
              {label: 'Allowance', value: 'allowance'},
              {label: 'Scholarship', value: 'scholarship'},
              {label: 'Part-time', value: 'part_time'},
            ]}
            placeholder='Allowance'

            set={setIncome}
          />
        </View>

        <View style={styles.duo}>
          <Text style={styles.label}>Amount</Text>
          <Input inputMode='numeric' placeholder='100.00'/>
        </View>

      <Break size={100} />

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
    fontSize: 18,
    marginBottom: 5,
  },
})