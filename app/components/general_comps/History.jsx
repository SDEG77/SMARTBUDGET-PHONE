import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Histories({ 
  category = 'none', 
  description = 'none', 
  amount = 'none', 
  date = 'none',
  mode = 'none', 
  filter = 'all'
}) {
  
  if(filter === mode){
    return (
      <View style={styles.record}>
        <View style={styles.column1}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
    
        <View style={styles.column2} >
          <Text style={styles.description}>
            {date}
          </Text>

          <Text style={{...styles.amount, color: mode === 'expenses' ? 'red' : 'green'}}>
            {mode === 'income' ? '+' : '-'}{amount}
          </Text>
        </View>
      </View>
    )
  } 

  if(filter === 'all'){
    return (
      <View style={styles.record}>
        <View style={styles.column1}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
    
        <View style={styles.column2}>
          <Text style={styles.description}>
            {date}
          </Text>
          
          <Text style={{...styles.amount, color: mode === 'expenses' ? 'red' : 'green'}}>{mode === 'income' ? '+' : '-'}{amount}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  record: {
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  amount: {
    marginLeft: -20,
  },
  column2: {
    alignItems: 'flex-end',
  },
})