import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../../../general_comps/BackBtn'
import Break from '../../../general_comps/Break'
import Input from '../../../general_comps/Input'
import Dropper from '../../../general_comps/Dropper'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, horizontalScreen, verticalScreen } from '../../../Settings'

export default function AddLedger(props) {
  const [select, setSelect] = useState('none');

  return (
    <View style={styles.container} >
      <BackBtn size={50} onPress={() => props.outerSets.page('ledger')} />

      <Text style={styles.h1}>ADD TO RECORD </Text>

      <Break />

      <View style={styles.duo}>
        <Text style={styles.label}>Mode</Text>

        <Dropper data={[
            {label: 'To Buy', value: 'to_buy'},
            {label: 'To Pay', value: 'to_pay',}
          ]} set={setSelect} placeholder='TO BUY' />
      </View>

      <View style={styles.duo}>
        <Text style={styles.label}>What</Text>

        <Input placeholder='Scotch Brown' />
      </View>

      <View style={{...styles.duo, marginTop: -9,}}>
        <Text style={styles.label}>Where</Text>

        <Dropper data={[
            {label: 'To Buy', value: 'to_buy'},
            {label: 'To Pay', value: 'to_pay',}
          ]} set={setSelect} placeholder='SM Cabanatuan' />
      </View>

      <View style={styles.duo}>
        <Text style={styles.label}>When</Text>

        <Dropper data={[
            {label: 'To Buy', value: 'to_buy'},
            {label: 'To Pay', value: 'to_pay',}
          ]} set={setSelect} placeholder='03/23/24' />
      </View>

      <View style={styles.duo}>
        <Text style={styles.label}>Amount</Text>

        <Input inputMode='numeric' placeholder='300.00' />
      </View>

      <Break size={30} />
    
      <TouchableOpacity activeOpacity={0.8} >
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
          <Text style={styles.text}>ADD TO RECORD</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScreen * 0.1,
    paddingVertical: verticalScreen * 0.08,
    flex: 1,
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  label: {
    fontSize: 16,
  },
  gradient: {
    paddingHorizontal: horizontalScreen * 0.11,
    paddingVertical: verticalScreen * 0.012,
    borderRadius: 15,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
})