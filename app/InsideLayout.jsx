import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { horizontalScreen, verticalScreen, LG } from './components/Settings';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faClockRotateLeft, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import logo from '../assets/LOGO.png';
import profilePic from '../assets/sigrae-mobile-frontend.jpg'

import Profile from './components/home/profile/Profile';
import UpdateProfile from './components/home/profile/components/UpdateProfile';
import ResetPassword from './components/home/profile/components/ResetPassword';

import Ledger from './components/home/ledger/Ledger';
import AddLedger from './components/home/ledger/components/AddLedger';
import LedgerHeader from './components/home/ledger/components/LedgerHeader';

import Tracker from './components/home/tracker/Tracker';
import AddTracker from './components/home/tracker/components/AddTracker';

import Planner from './components/home/planner/Planner';
import UpdateAllocation from './components/home/planner/components/UpdateAllocation';
import AddExpected from './components/home/planner/components/AddExpected';

import Dashboard from './components/home/dashboard/Dashboard';

export default function InsideLayout(){
  const [page, setPage] = useState('dashboard');

  // for the ledger header slider :)
  const [pressed, setPressed] = useState(0);

  let logoStyle = { ...styles.image, 
    width: page === 'ledger' ? 30 : 37,
    height: page === 'ledger' ? 30 : 37
  };

  // an object filled with page components
  const pages = {
    'profile': <Profile outerSets={{page: setPage}}/>, 
    'updateProfile': <UpdateProfile outerSets={{back: setPage}} />, 
    'resetPassword': <ResetPassword  outerSets={{back: setPage}} />, 
    
    'dashboard': <Dashboard />, 

    'tracker': <Tracker outerSets={{page: setPage}} />, 
    'addTracker': <AddTracker outerSets={{page: setPage}} />,
    
    'ledger': <Ledger pressed={pressed} setPressed={setPressed} />, 
    'addLedger': <AddLedger outerSets={{page: setPage}} />,

    'planner': <Planner outerSets={{page: setPage}} />,
    'updateAllocation': <UpdateAllocation outerSets={{page: setPage}} />,
    'addExpected': <AddExpected outerSets={{page: setPage}} />,  
  };

  // if the current page is profile or a subset of profile 
  let profileColor = page === 'profile' || page === 'updateProfile' || page === 'resetPassword' ? 'white' : 'black';
  let profileWidth = page === 'profile' || page === 'updateProfile' || page === 'resetPassword' ? 2 : 0;

  let plannerColor = page === 'planner' || page ==='updateAllocation' || page === 'addExpected' ? 'white' : 'transparent';
  let plannerIconColor = page === 'planner' || page === 'updateAllocation' || page === 'addExpected' ? 'black' : 'white';

  return (
    <KeyboardAvoidingView behavior={'position'} enabled={page === 'updateProfile'}>
    <LinearGradient colors={LG.colors} start={LG.start} end={LG.end} locations={LG.locations} dither={false} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10, marginLeft: 20}}>
        <Image source={logo} style={logoStyle}/>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: page === 'ledger' ? 15 : 18}}>SMARTBUDGET</Text>
      </View>

      {page === 'ledger' ? <LedgerHeader pressed={pressed} setPressed={setPressed} outerSets={{page: setPage,}} /> : null}

      <View style={{...styles.body, 
        height: page === 'ledger' ? verticalScreen * 0.6 : verticalScreen * 0.8,
        bottom: page === 'ledger' ? -142 : 0,
        }}>
        {pages[page]}
      </View>

      <View style={styles.tabs}>
        <TouchableHighlight underlayColor='rgba(165, 165, 165, 0.45)' activeOpacity={0.9} onPress={() => setPage('tracker')} style={{...styles.icons, backgroundColor: (page === 'tracker') || (page === 'addTracker') ? 'white'  : 'transparent',}}> 
          <FontAwesomeIcon icon={faClockRotateLeft} size={27} color={page === 'tracker' || page === 'addTracker' ? 'black' : 'white'} style={{...styles.insideIcon, marginTop: 0}}/>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='rgba(165, 165, 165, 0.45)' activeOpacity={0.9} onPress={() => setPage('ledger')} style={{...styles.icons, backgroundColor: page === 'ledger' || page === 'addLedger' ? 'white' : 'transparent',}}> 
          <FontAwesomeIcon icon={faStar} size={35} color={page === 'ledger' || page === 'addLedger' ? 'black' : 'white'} style={{...styles.insideIcon, marginTop: -2}}/>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='rgba(165, 165, 165, 0.45)' activeOpacity={0.9} onPress={() => setPage('dashboard')} style={{...styles.icons, backgroundColor: page === 'dashboard' ? 'white' : 'transparent',}}> 
          <FontAwesomeIcon icon={faHouse} size={33} color={page === 'dashboard' ? 'black' : 'white'} style={styles.insideIcon}/>
        </TouchableHighlight>
        
        <TouchableHighlight underlayColor='rgba(165, 165, 165, 0.45)' activeOpacity={0.9} onPress={() => setPage('planner')} style={{...styles.icons, backgroundColor: plannerColor}}>
          <FontAwesomeIcon icon={faCalendarDays} size={30} color={plannerIconColor} style={{...styles.insideIcon, marginTop: -2}}/>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='rgba(165, 165, 165, 0.45)' activeOpacity={0.9} onPress={() => setPage('profile')} style={{...styles.icons, borderWidth: profileWidth, borderColor: profileColor}}> 
          <Image source={profilePic} style={styles.profileImg} />
        </TouchableHighlight>
      </View>
    </LinearGradient>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScreen * 0.05,
    display: 'flex',
    width: horizontalScreen,
    height: verticalScreen + 27,
    backgroundColor: '#063b32',
  },
  image: {
    width: 37,
    height: 37,
  },
  body: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    width: horizontalScreen * 0.95,
    height: verticalScreen * 0.80,
    marginBottom: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'transparent',
    width: horizontalScreen,
    height: 75,
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  insideIcon: {
    marginTop: -3,
  },
  profileImg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 56,
    height: 56,
  },
});