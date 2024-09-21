import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Date({ current, histories }) {

  return (
    <View style={styles.parentDiv}>
      <Text style={styles.h1}>{current}</Text>
      {histories.length > 2 ? <Text style={styles.scrollLabel}>↓ Scroll ↓</Text> : null}

      <ScrollView nestedScrollEnabled style={styles.childDiv}>
        {histories}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  parentDiv: {
    position: 'relative',
    marginBottom: 20,
  },
  childDiv: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.55)',
    height: 100,
    paddingVertical: 5,
    paddingBottom: 5, 
    overflow: 'hidden',
  },
  h1: {
    fontSize: 14,
    marginBottom: 5,
    color: 'gray',
  },
  scrollLabel: {
    backgroundColor: 'rgba(128, 128, 128, 0.55)',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 20,
    position: 'absolute',
    bottom: -10,
    left: 100,
    zIndex: 1,
  },
})