import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Items({ labels = ['blank', 'blank'], amounts = [0, 0], half = false }) {
  return (
    <View style={{...styles.row, justifyContent: half ? 'center' : 'flex-start',}}>
      <View style={styles.list}>
        <Text style={{...styles.p, fontWeight: 'bold'}}>{labels[0]}</Text>
        <Text style={styles.p}>{amounts[0]}</Text>
      </View>

      {!half ? 
        <View style={styles.list}>
          <Text style={{...styles.p, fontWeight: 'bold'}}>{labels[1]}</Text>
          <Text style={styles.p}>{amounts[1]}</Text>
        </View>
        :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 5,
  },
  p: {
    fontSize: 12,
  },
})