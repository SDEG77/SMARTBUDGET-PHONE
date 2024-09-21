import { ScrollView, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Buy from './components/Buy'
import Pay from './components/Pay'

export default function Ledger(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>List</Text>
      
      <TouchableOpacity
      onPress={() => Alert.alert(
        'Delete Selected Items?',
        `Do you want to delete the selected items from the ${props.pressed === false ? 'To Buy List' : 'To Pay List'}?`,
        [
          {text: 'Yes', style: 'destructive'},
          {text: 'No', style: 'cancel'}
        ]
      )}
      activeOpacity={0.6} 
      style={styles.iconDiv}>
        <FontAwesomeIcon icon={faTrashCan} size={16} color='white' />
      </TouchableOpacity>

      {props.pressed ? <Buy /> : <Pay />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginLeft: 20,
    marginBottom: 15,
  },
  iconDiv: {
    position: 'absolute',
    right: 30,
    top: 15,
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 100,
  },
})