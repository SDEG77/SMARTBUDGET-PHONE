import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ExpectedItems( {
  dates=[
    '08/12/24',
    '09/12/24',
    '10/12/24',
    '10/24/24',
    '10/26/24',
  ],
  sources=[
    'Parents',
    'Parents',
    'Scholarship',
    'Parents',  
    'Parents',
  ],
  amounts=[
    '35,000.00',
    '35,000.00',
    '30,000.00',
    '35,000.00',
    '35,000.00',
  ]
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>Date</Text>

        {dates.map((date, index) => (
          <Text key={index} style={styles.data}>{date}</Text>
        ))}
      </View>

      <View>
        <Text style={styles.h1}>Source</Text>

        {sources.map((source, index) => (
          <Text style={styles.data} key={index}>{source}</Text>
        ))}
      </View>

      <View>
        <Text style={styles.h1}>Amount</Text>

        {amounts.map((amount, index) => (
          <Text style={styles.data} key={index} >{amount}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 40,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 10,
  },
  data: {
    fontSize: 13,
  },
})