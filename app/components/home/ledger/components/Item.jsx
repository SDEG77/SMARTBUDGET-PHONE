import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquareCheck as faUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck as faChecked } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

export default function Item({ name = 'none', from = 'none', cost = 0, date = '00/00/00'}) {
  const [check, setCheck] = useState(false);
  let main = check ? 'rgba(0, 0, 0, 0.4)' : 'black'; 
  let secondary = check ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.7)';

  return (
    <View style={{...styles.container, backgroundColor: check ? 'transparent' : '#e4e4e4'}}>
      <View style={styles.duo}>
        <TouchableOpacity style={{marginRight: 5,}} onPress={() => setCheck(!check)} activeOpacity={0.7}>
          <FontAwesomeIcon icon={!check ? faUnchecked : faChecked} size={!check ? 33 : 30} color='rgb(1, 156, 1)' />
        </TouchableOpacity>

        <View style={styles.textInfo}>
          <Text style={{...styles.main, color: main}}>{name}</Text>
          <Text style={{...styles.secondary, color: secondary}}>{from}</Text>
        </View>
      </View>
      
      <View style={styles.numberInfo}>
        <Text style={{...styles.main, color: main}}>{cost}</Text>
        <Text style={{...styles.secondary, color: secondary}}>{date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e4e4e4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  duo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textInfo: {
    gap: 0,
    marginTop: -3,
  },
  numberInfo: {
    alignItems: 'flex-end',
    marginTop: -3,
  },
  main: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  secondary: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },
})