import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Modal, Dimensions,} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link , useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import BackBtn from '../general_comps/BackBtn';
import Input from '../general_comps/Input';
import Break from '../general_comps/Break';

const ip = require('../../address');

export default function Login(props){
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [ok, setOk] = useState('default');

  const user = {
    email: email,
    password: password,
  };

  const submitUserData = async () => {
      try {
      const response = await fetch(ip + '/api/user/login', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })

        const data = await response.json(); 
        console.log('Submitted successfully:', data);

        if (data.length > 0) {
          setOk(true);
        } else {
          setOk(false);
          console.warn('Wrong password or email!')
        }
      } 
      
      catch (error){
        console.error('Submission failed:', error);
        setOk(false);
      }
  } 

  const route = useRouter();

  useEffect(() => {
    if (ok === true) {
      route.push('/InsideLayout')
    } 
    else if(ok === "default") {
      null
    }
    else {
      route.push('/')
    }
  }, [ok])

  return (
    <React.Fragment>
      <TouchableOpacity onPress={() => props.set(!props.up)} style={styles.btn} activeOpacity={0.65} hitSlop={{top: 5, bottom: 10, right: 5, left: 10}}>
          <Text style={{...styles.text, color: 'black', letterSpacing: 2, fontWeight: 'bold', paddingHorizontal: 30, paddingVertical: 7}}>LOGIN</Text>
      </TouchableOpacity>

      <Modal animationType='slide' visible={props.up} transparent={true} onRequestClose={() => props.set(!props.up)}>
        <TouchableWithoutFeedback onPress={() => props.set(!props.up)}>
          <Text style={styles.loginClose}></Text>
        </TouchableWithoutFeedback>

          <View style={styles.loginModal}>
            <BackBtn onPress={() => props. set(!props.up)} />

            <Break />
            <Text style={{fontSize: 33, fontWeight: 'bold', letterSpacing: 4, marginBottom: 30}}>LOGIN</Text>
            <Input value={email} onChangeText={setEmail} placeholder='Email Address' height={50}/>
            <Break size={10}/>
            <Input value={password} onChangeText={setPassword} placeholder='Password' height={50}/>
            <Text onPress={() => {props.setForgot(!props.forgot); props.set(!props.up)}} style={styles.forgot}>Forgot Password?</Text>

            <Break size={130}/>

            <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={{borderRadius: 20}}>
              <Link onPress={async () => await submitUserData()} style={styles.loginBtn} href=''>
                  <Text style={{...styles.text, letterSpacing: 4}}>LOGIN</Text>  
              </Link>
            </LinearGradient>

            <Break size={10}/>

            <View>
              <Text>Dont have an account? <Text className='login' style={{...styles.text, color: '#09ba67', fontSize: 17}} onPress={() => {props.set(!props.up); props.setRegister(!props.registerUp)}}>SIGNUP</Text></Text>
            </View>
          </View>
      </Modal>
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
  btn: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 70,
    right: 25,
    borderRadius: 13,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginModal: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
    left: 8,
    width: horizontalScreen - 18,
    height: verticalScreen * .7,
    paddingTop: 25,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  loginClose: {
    width: horizontalScreen,
    height: verticalScreen,
    backgroundColor: 'rgba(82, 81, 81, 0.45)',
  },
  loginBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 107,
    paddingVertical: 10,
    borderRadius: 10,
  },
  forgot: {
    marginRight: -165,
    color: 'rgba(0, 0, 0, 0.6)',
  },
})