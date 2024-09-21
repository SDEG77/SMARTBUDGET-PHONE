import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { horizontalScreen, verticalScreen } from '../../../Settings'
import History from '../../../general_comps/History'
import Date from '../../../general_comps/Date'

export default function Transactions() {
  let count;

  return (
    <View style={styles.transactionsDiv}>
      <Text style={styles.h1}>Transactions</Text>

      <ScrollView nestedScrollEnabled contentContainerStyle={styles.transactionsScroll}>
        <Text style={styles.h2}>History</Text>

        <History category='Food' description='Coffee in Starbucks' date='Today' amount='250' mode='expenses' />
        <History category='Scholarship' description='City Hall' date='Today' amount='2,000.00' mode='income' />
        <History category='Allowance' description='From Parents' date='Today' amount='250.00' mode='income' />
        <History category='Allowance' description='From Parents' date='Today' amount='250.00' mode='income' />  

        <History category='School' description='Tuition Fee' date='Yesterday' amount='4,134.00' mode='expenses' />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 15,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 22,
  },
  transactionsDiv: {
  },
  transactionsScroll: {
    borderRadius: 10,
    width: horizontalScreen * 0.82,
    flex: 1,
    elevation: 4,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    marginHorizontal: 2,
    marginBottom: 10,
  },
})