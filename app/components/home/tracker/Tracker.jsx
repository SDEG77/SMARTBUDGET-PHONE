import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { horizontalScreen, verticalScreen } from '../../Settings'
import Totals from './components/Totals'
import ModeBtns from './components/ModeBtns'
import Date from '../../general_comps/Date'
import History from '../../general_comps/History'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'

export default function Tracker(props) {
  const [mode, setMode] = useState('all');

  return (
    <React.Fragment>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>TRACKER</Text>

        <Totals />

        <View style={styles.barChart} />

        <ModeBtns up={mode} set={setMode}/>

        <View style={styles.historyDiv}>
          {mode === 'all' ? <Text style={styles.h2} >HISTORY</Text> : null}
          {mode === 'expenses' ? <Text style={styles.h2} >EXPENSES HISTORY</Text> : null}
          {mode === 'income' ? <Text style={styles.h2} >INCOME HISTORY</Text> : null}

          <TouchableOpacity onPress={() => Alert.alert(
            `Clear All History?`, 
            `Do you want to delete ALL ${mode !== 'all' ? mode.toUpperCase() : 'HISTORIES'}?`, 
            [
              {text: 'Yes', style: 'destructive'},
              {text: 'No', style: 'default'}
            ])} 
            activeOpacity={0.7} 
            style={styles.trash}> 
            <FontAwesomeIcon icon={faTrashCan} size={17} color='white'/>  
          </TouchableOpacity>       

          <ScrollView nestedScrollEnabled style={styles.dateDivs}>
            <History category='Food' description='Coffee in Starbucks' amount='250.00' date='This Week' filter={mode} mode='expenses' />
            <History category='Scholarship' description='Cityhall' amount='2,000.00' date='This Week' filter={mode} mode='income' />
            <History category='Allowance' description='From Parents' amount='250.00' date='This Week' filter={mode} mode='income' />

            <History category='Scholarship' description='Cityhall' amount='2,000.00' date='This Week' filter={mode} mode='income' />
            <History category='Allowance' description='From Parents' amount='250.00' date='This Week' filter={mode} mode='income' />
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => props.outerSets.page('addTracker')} activeOpacity={0.7} style={styles.addBtn}>
        <FontAwesomeIcon icon={faPlus} size={30} color='rgba(255, 255, 255, 0.8)' />
      </TouchableOpacity>
    </React.Fragment>
    
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: verticalScreen * 0.025,
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginLeft: 25,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  barChart: {
    borderRadius: 25,
    width: horizontalScreen * 0.856,
    height: verticalScreen * 0.3,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  historyDiv: {
    width: horizontalScreen * 0.856,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  trash: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  addBtn: {
    backgroundColor: 'rgba(28, 55, 32, 0.8)',
    width: 55,
    height: 55,
    borderRadius: 100,
    position: 'absolute',
    bottom: 25,
    right: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  dateDivs: {
    marginTop: 20,
  },
})