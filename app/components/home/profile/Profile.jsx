import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Alert, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Link } from 'expo-router'
import { horizontalScreen, verticalScreen, LG } from '../../Settings'

import yahoo from '../../../../assets/sigrae-mobile-frontend.jpg'

import FwdBtn from './components/FwdBtn';
import Break from '../../general_comps/Break'

export default function Profile(props){
  return (
    <React.Fragment>
      <ScrollView contentContainerStyle={scroll}>
        <Image source={yahoo} style={styles.img} />
        <Text style={styles.h1}>MANAGE YOUR ACCOUNT</Text>

        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.highlight} underlayColor='rgba(165, 165, 165, 0.638)' onPress={() => props.outerSets.page('updateProfile')}>
            <View onPress={null} style={{...styles.btns, gap: horizontalScreen * 0.242}}>
              <Text style={styles.link}>Update Information</Text>
              <FwdBtn fontSize={34} />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.highlight} underlayColor='rgba(165, 165, 165, 0.638)' onPress={() => props.outerSets.page('resetPassword')}>
            <View style={styles.btns}>
              <Text style={styles.link}>
                Reset Password
              </Text>
              <FwdBtn fontSize={34} />
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight style={styles.highlight} underlayColor='rgba(165, 165, 165, 0.638)' onPress={() => {
            Alert.alert('Are You Sure?', 'You will get deleted!', [
              {text: 'DELETE', style: 'destructive'}, 
              {text: 'CANCEL', style: 'cancel'}])
          }} >
            <View style={styles.btns}>
              <Text style={styles.link}>
                Delete Account 
              </Text>
              <FwdBtn fontSize={34} />
            </View>
          </TouchableHighlight>
        </View>

        <Break size={35} />
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={{borderRadius: 15}}>
          <Link href='/' style={styles.logout}>
              LOG OUT
          </Link>
        </LinearGradient>
      </ScrollView>

    </React.Fragment>
  )
}

const scroll = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  paddingTop: 25,
};

const styles = StyleSheet.create({
  img: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: 'black',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  h1: {
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 1  ,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  highlight: {
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScreen * 0.32,
    width: horizontalScreen * 0.83,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 17,
  },
  link: {
    textAlignVertical: 'center',
    fontSize: 16,
    letterSpacing: 1,
  },
  logout: {
    backgroundColor: 'transparent',
    paddingHorizontal: horizontalScreen * 0.265,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
})