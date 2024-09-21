import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../general_comps/Input' 
import BackBtn from '../general_comps/BackBtn'
import Break from '../general_comps/Break'

export default function Forgot(props){
  const [verify, setVerify] = useState(true);

  return (
    <React.Fragment>
      <Modal animationType='slide' visible={props.up} transparent={true} onRequestClose={() => props.set(!props.up)}>

        <TouchableWithoutFeedback onPress={() => props.set(!props.up)}>
          <Text style={styles.forgotClose}></Text>
        </TouchableWithoutFeedback>
        
        <View style={styles.loginModal}>
          <BackBtn size={50} onPress={() => props.set(!props.up)}/>

          {verify ? 
            <>
              <Break size={30} />
              <Text style={{...styles.h1, marginTop: 10}}>FORGOT PASSWORD?</Text>
              <Text style={styles.p}>Please enter your email address to verify your idetity</Text>
              <Break size={25} />

              <Input placeholder='Email Address' />

              <Break size={80} />


                <TouchableOpacity activeOpacity={0.8} style={styles.forgotBtn} onPress={() => setVerify(!verify)}>
                <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
                  <Text style={styles.text}>
                    VERIFY
                  </Text> 
                  </LinearGradient> 
                </TouchableOpacity> 
                
            </> 
          :
            <>
              <Break size={30} />
              <Text style={styles.h1}>FORGOT PASSWORD</Text>
              <Break size={25} />

              <Text style={styles.label}>Create New Password</Text>
              <Input />

              <Text style={styles.label}>Confirm New Password</Text>
              <Input />
              <Break size={47} />

                <TouchableOpacity activeOpacity={0.8} style={styles.forgotBtn} onPress={() => {setVerify(!verify) ;props.set(!props.up)}}>
                <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.gradient}>
                  <Text style={styles.text}>
                    RESET
                  </Text>  
                  </LinearGradient>
                </TouchableOpacity> 
            </>
          }
        </View>
    </Modal>
    </React.Fragment>
  )
}

const [horizontalScreen,verticalScreen] = [Dimensions.get('window').width, Dimensions.get('window').height];
const LG = {
  colors:['#063831', '#036742', '#036742', '#035a3d', '#063831'], 
  locations: [0, 0.25, 0.5, 0.75, 1], 
  start:{x: 0, y: 0}, 
  end:{x: 1, y: 0}, 
};


const styles = StyleSheet.create({
  loginModal: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 170,
    left: 8,
    width: horizontalScreen - 18,
    height: verticalScreen * .55,
    paddingTop: 25,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  p: {
    width: 230,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  label: {
    fontSize: 17,
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginBottom: 4,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  forgotClose: {
    width: horizontalScreen,
    height: verticalScreen,
    backgroundColor: 'rgba(82, 81, 81, 0.45)',
  },
  forgotBtn: {
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  gradient: {
    borderRadius: 13,
    paddingHorizontal: 107,
    paddingVertical: 10,
  },
})