import {KeyboardAvoidingView, Platform ,StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import BackBtn from '../general_comps/BackBtn';
import Input from '../general_comps/Input';
import Break from '../general_comps/Break';

const ip = require('../../address');

export default function Register(props){
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [passConfirm, setPassConfirm] = useState('');

  const user = {
    name: name,
    email: email,
    password: password,
    passConfirm,
  };

  const submitUserData = async () => {
    // console.log(JSON.stringify(user)) 
  
    // if(user.password === user.passConfirm){
      try {
        const response = await fetch(ip + '/api/user', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
      
        console.warn('Registered successfully:');
      } catch (error) {
        console.error('Submission failed:', error);
      }
    } 
    // else {
    //   console.error('PASSWORD IS NOT THE SAME:', error);
    // }
  // }
  
  return (
    <React.Fragment>
      <Modal animationType='slide' visible={props.up} transparent={true} onRequestClose={() => props.set(!props.up)}>
        <TouchableWithoutFeedback onPress={() => props.set(!props.up)}>
          <View style={styles.registerClose}></View>
        </TouchableWithoutFeedback>

          <View behavior='height' style={styles.registerModal}>
            <BackBtn onPress={() => props.set(!props.up)} />

            <Break />
            <Text style={{fontSize: 33, fontWeight: 'bold', letterSpacing: 2, marginBottom: 25}}>SIGNUP</Text>
            <Input value={name} onChangeText={setName} placeholder='Complete Name'/>
            <Input value={email} onChangeText={setEmail} placeholder='Email Address'/>

            <Break size={20}/>

            <Input value={password} onChangeText={setPassword} placeholder='Create Password'/>
            <Input placeholder='Confirm Password'/>

            <Break size={50}/>

            <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={{borderRadius: 20}}>
            <TouchableOpacity onPress={() => {
              props.set(!props.up); props.setLogin(!props.loginUp)
              
              submitUserData();
              }} 
              style={styles.registerBtn} 
              activeOpacity={0.7}
            >
                <Text style={{...styles.text, letterSpacing: 3}}>REGISTER</Text>  
            </TouchableOpacity>
            </LinearGradient>

            <Break size={10}/>

            <View style={{flex: 3}}>
              <Text>Already have an account? <Text className='register' style={{...styles.text, color: '#09ba67', fontSize: 17, marginBottom: -20}} onPress={() => {props.set(!props.up); props.setLogin(!props.loginUp)}}>LOGIN</Text></Text>
            </View>
          </View>
      </Modal>

      <TouchableOpacity onPress={() => { props.set(true) }} 
        style={{...styles.register, ...styles.text, fontSize: 22, letterSpacing: 4}}
      >
        <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.registerGradient}>
          <Text style={{...styles.text}}>REGISTER</Text>
        </LinearGradient>
      </TouchableOpacity>
    </React.Fragment>
  )
}

const [horizontalScreen, verticalScreen] = [Dimensions.get('window').width, Dimensions.get('window').height];
const LG = {
  colors:['#063831', '#036742', '#036742', '#035a3d', '#063831'], 
  locations: [0, 0.25, 0.5, 0.75, 1], 
  start:{x: 0, y: 0}, 
  end:{x: 1, y: 0}, 
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    position: 'absolute',
    bottom: 120, 
    textAlign: 'center', 
    textAlignVertical: 'center', 
    borderColor: 'white', 
    borderWidth: 7,
    borderRadius: 18, 
  },
  registerGradient: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 12
  },
  registerModal: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    left: 8,
    width: horizontalScreen - 18,
    height: verticalScreen * .70,
    paddingTop: 29,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  registerClose: {
    width: horizontalScreen,
    height: verticalScreen,
    backgroundColor: 'rgba(82, 81, 81, 0.45)',
  },
  registerBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 88,
    paddingVertical: 10,
    borderRadius: 10,
  },
})