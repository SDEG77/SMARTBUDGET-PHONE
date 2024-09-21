import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ExpectedItems from './ExpectedItems'

export default function Expected(props) {
  return (
  <View style={styles.container}>
    <Text style={styles.h1}>Expected Income</Text>
    <TouchableOpacity onPress={() => props.outerSets.page('addExpected')} activeOpacity={0.75} style={styles.iconDiv}>
      <FontAwesomeIcon  icon={faPlus} color='white' size={18} />
    </TouchableOpacity>

    <View style={styles.expectedDiv}>
      <ExpectedItems />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginBottom: 30,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  iconDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'green',
    padding: 9,
    borderRadius: 100,
  },
  expectedDiv: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 3,
    paddingVertical: 16,
    borderRadius: 20,
    marginBottom: 5,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  itemDiv: {
    flexDirection: 'row',
  },
})