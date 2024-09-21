import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { horizontalScreen, verticalScreen } from '../../../Settings'
import Items from './Items'

export default function Summary() {
  return (
    <View style={styles.summaryDivs}>
      <View style={styles.summaryDiv}>
        <Text style={styles.h1}>Expenses Summary</Text>

        <View style={styles.summaryContent}>
          <View style={styles.summaryDonut}/>

          <View style={styles.itemsDiv}>
            <View style={styles.duo}>
              <Items labels={['Food', 'Rent']} amounts={['80,000.00', '40.000.00']}/>
              <Items labels={['Transpo.', 'Debt/Loan']} amounts={['80,000.00', '40.000.00']}/>
            </View>
            
            <View style={styles.duo}>
              <Items labels={['Shopping', 'Mobile']} amounts={['80,000.00', '40.000.00']}/>
              <Items labels={['Savings', 'School']} amounts={['80,000.00', '40.000.00']}/>
            </View>
            
            <View style={{...styles.duo, alignSelf: 'center', marginBottom: 0,}}>
              <Items labels={['Others', 'School']} amounts={['80,000.00', '40.000.00']} half={true} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.summaryDiv}>
        <Text style={styles.h1}>Income Summary</Text>

        <View style={styles.summaryContent}>
          <View style={styles.summaryDonut}/>

          <View style={styles.itemsDiv}>
            <View style={styles.duo}>
              <Items labels={['Food', 'Rent']} amounts={['80,000.00', '40.000.00']}/>
              <Items labels={['Transpo.', 'Debt/Loan']} amounts={['80,000.00', '40.000.00']}/>
            </View>
            
            <View style={styles.duo}>
              <Items labels={['Shopping', 'Mobile']} amounts={['80,000.00', '40.000.00']}/>
              <Items labels={['Savings', 'School']} amounts={['80,000.00', '40.000.00']}/>
            </View>
            
            <View style={{...styles.duo, alignSelf: 'center', marginBottom: 0,}}>
              <Items labels={['Others', 'School']} amounts={['80,000.00', '40.000.00']} half={true} />
            </View>
          </View>
        </View>
      </View>

      
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
  summaryDivs: {
    gap: 20,
    marginBottom: 20,
  },
  summaryDiv: {
    width: horizontalScreen,
  },
  summaryContent: {
    paddingVertical: 22,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    width: horizontalScreen * 0.85,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 4,
    gap: 20,
  },
  duo: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 3,
  },
  summaryDonut: {
    width: 180,
    height: 180,
    backgroundColor: 'red',
  },
})