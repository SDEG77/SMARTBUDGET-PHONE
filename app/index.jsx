import { StyleSheet, Text, View,Image, Dimensions,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Register from './components/welcome/Register';
import Login from './components/welcome/Login';
import Forgot from './components/welcome/Forgot'

import Logo from '../assets/LOGO.png';

export default function index() {
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [forgot, setForgot] = useState(false);

  return (
      <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} style={styles.container} dither={false}>
        <View style={{display: 'flex', alignItems: 'center', position: 'absolute', top: 175
        }}>
          <Image source={Logo} style={styles.img}></Image>
          <Text style={{...styles.text, fontSize: 37, fontWeight: 'bold', marginTop: 10}}>SMARTBUDGET</Text>
        </View>

        <Login up={login} set={setLogin} registerUp={modal} setRegister={setModal} forgot={forgot} setForgot={setForgot}/>
        <Forgot up={forgot} set={setForgot} />
        <Register up={modal} set={setModal} loginUp={login} setLogin={setLogin}/>

        <StatusBar style="auto" />
      </LinearGradient>
  );
}

const LG = {
  colors:['#063831', '#036742', '#036742', '#035a3d', '#063831'], 
  locations: [0, 0.25, 0.5, 0.75, 1], 
  start:{x: 0, y: 0}, 
  end:{x: 1, y: 0}, 
};

const [horizontalScreen, verticalScreen] = [Dimensions.get('window').width, Dimensions.get('window').height];
const icon = {WH: 134};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    backgroundColor: '#063b32',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 70,
    right: 25,
    borderRadius: 13,
  },
  img: {
    width: icon.WH,
    height: icon.WH,
  },
});
