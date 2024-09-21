import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from './Item'

export default function Pay() {
  return (
    <React.Fragment>
      <Item name='Aquaflask' from='SM City Cabanatuan' cost='750.00' date='12/13/24' />
      <Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /> 
    </React.Fragment>
  )
}

const styles = StyleSheet.create({})