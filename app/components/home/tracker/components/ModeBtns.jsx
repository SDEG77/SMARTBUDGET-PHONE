import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { LG, horizontalScreen, verticalScreen } from '../../../Settings'

export default function ModeBtns(props) {
  const inactive = 'rgba(159, 158, 158, 0.3)';
  
  return (
    <View style={styles.btns}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.set('all')} >
        <LinearGradient colors={props.up === 'all' ? LG.colors : [inactive, inactive]} start={LG.start} end={LG.end} locations={props.up === 'all' ? LG.locations : [0, 1]} dither={false} style={styles.gradient}>
          <Text style={{...styles.innerText, color: props.up === 'all' ? 'white' : 'black'}}>All</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={() => props.set('expenses')} >
        <LinearGradient colors={props.up === 'expenses' ? LG.colors : [inactive, inactive]} start={LG.start} end={LG.end} locations={props.up === 'expenses' ? LG.locations : [0, 1]} dither={false} style={styles.gradient}>
          <Text style={{...styles.innerText, color: props.up === 'expenses' ? 'white' : 'black'}}>Expenses</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={() => props.set('income')} >
        <LinearGradient colors={props.up === 'income' ? LG.colors : [inactive, inactive]} start={LG.start} end={LG.end} locations={props.up === 'income' ?  LG.locations : [0, 1]} dither={false} style={styles.gradient}>
          <Text style={{...styles.innerText, color: props.up === 'income' ? 'white' : 'black'}}>Income</Text>  
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btns: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  gradient: {
    paddingHorizontal: horizontalScreen * 0.06,
    paddingVertical: verticalScreen * 0.01,
    borderRadius: 20,
  },
  innerText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
})