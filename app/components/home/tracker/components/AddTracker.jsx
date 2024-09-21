import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../../../general_comps/BackBtn'
import Input from '../../../general_comps/Input'
import Break from '../../../general_comps/Break'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, horizontalScreen, verticalScreen } from '../../../Settings'
import Dropper from '../../../general_comps/Dropper'

export default function AddTracker(props) {
  const [mode, setMode] = useState('none');
  const [category, setCategory] = useState('none');
  const [date, setDate] = useState('none');


  return (
    <View style={styles.container}>
      <BackBtn size={55} onPress={() => props.outerSets.page('tracker')} />

      <Break size={55} />

      <Text style={styles.h1}>ADD TO RECORD</Text>
      
      <Break size={20} />

      <View style={styles.duo}>
        <Text style={styles.label} >Item Description</Text>
        <Input placeholder='Type here'/>
      </View>

      <View>
        <Text style={styles.label} >Mode</Text>
          <Dropper set={setMode} placeholder='Outgoing' data={[
            {label: 'Outgoing', value: 'expenses'}, 
            {label: 'Ingoing', value: 'income'}, 
          ]}/>
      </View>
      
      <View>
        <Text style={styles.label} >Category</Text>
        <Dropper data={[
          {label: 'Transportation', value: 'transportation'},
          {label: 'Food', value: 'food'},
          {label: 'Scholarshp', value: 'scholarship'},
          {label: 'Allowance', value: 'allowance'},
        ]} set={setCategory} placeholder='Transportation' />
      </View>
      
      <View>
        <Text style={styles.label} >Date</Text>
      <Dropper data={[
        {label: 'Today', value:'today'},
        {label: 'Yesterday', value:'yesterday'},
        {label: 'Last Week', value:'last_week'},
      ]} set={setDate} placeholder='Today' />
      </View>
      
      <View>
        <Text style={styles.label} >Amount</Text>
        <Input inputMode='numeric' placeholder='100.00'/>
      </View>

      <Break size={33} />

      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
          <Text style={{color: 'white', fontSize: 21, fontWeight: 'bold', letterSpacing: 1}}>ADD TO RECORD</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 2,
  },
  gradient: {
    borderRadius: 15,
    paddingHorizontal: horizontalScreen * 0.15,
    paddingVertical: verticalScreen * 0.012,
  },
})