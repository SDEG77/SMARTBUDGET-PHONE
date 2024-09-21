import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../../general_comps/Input';
import BackBtn from '../../../general_comps/BackBtn';
import { horizontalScreen, verticalScreen, LG } from '../../../Settings';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import yahoo from '../../../../../assets/sigrae-mobile-frontend.jpg'

export default function UpdateProfile(props) {
  return (
    <View style={styles.container}>
      <BackBtn size={55} onPress={() => props.outerSets.back('profile')}/>

      <Text style={styles.h1}>UPDATE INFORMATION</Text>

      <View style={{position: 'relative'}}>
        <Image source={yahoo} style={styles.img} />
          <TouchableOpacity style={styles.changeBtn} activeOpacity={0.8}>
            <FontAwesomeIcon icon={faCamera} color='rgba(0, 119, 0, 0.65)' size={20} />
          </TouchableOpacity>
      </View>

      <View>
        <Input placeholder='Full Name'/>
        <Input inputMode='email' placeholder='Email'/>
        <Input placeholder='University'/>
        <Input placeholder='Course'/>
      </View>

      <TouchableOpacity style={styles.saveBtn} activeOpacity={0.85}>
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18, letterSpacing: 3}}>SAVE</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    )
}

const profilePic = 110;
const changeBtnSize = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 27,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: -5,
  },
  img: {
    marginTop: 0,
    position: 'relative',
    height: profilePic,
    width: profilePic,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
  },
  changeBtn: {
    position: 'absolute',
    bottom: 0 ,
    right: -5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: changeBtnSize,
    height: changeBtnSize,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },
  saveBtn: {
    marginBottom: -20,
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  gradient: {
    borderRadius: 15,
    paddingHorizontal: horizontalScreen * 0.31,
    paddingVertical: verticalScreen * 0.015,
  },
})