import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import Break from '../../..//general_comps/Break'
import Input from '../../../general_comps/Input'
import BackBtn from '../../../general_comps/BackBtn'
import { horizontalScreen, verticalScreen, LG } from '../../../Settings'

export default function ResetPassword(props) {
  return (
    <View style={styles.container}>
      <BackBtn onPress={() => props.outerSets.back('profile')} />

      <Text style={styles.h1}>RESET PASSWORD</Text>

      <View style={styles.div}>
        <Text style={styles.label}>Current Password</Text>
        <Input />

        <Text>New Password</Text>
        <Input />
        
        <Text>Confirm Password</Text>
        <Input />
      </View>

      <Break size={70} />

      <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 21, letterSpacing: 2}}>RESET</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  gradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScreen * 0.78,
    height: verticalScreen * 0.065,
    borderRadius: 15,
  },
})