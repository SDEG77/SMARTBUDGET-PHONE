import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { horizontalScreen, verticalScreen } from '../../../Settings'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

export default function LedgerHeader(props) {
  const translate = useRef(new Animated.Value(0)).current;
  const translateColor = useRef(new Animated.Value(0)).current;
  
  const [target, setTarget] = useState(0);

  const animate = (value) => {
    Animated.timing(
      translate,
      {
        toValue: target,
        duration: 200,
        useNativeDriver: true,
      }
    ).start();
    
    Animated.timing(
      translateColor,
      {
        toValue: target,
        duration: 1,
        useNativeDriver: true,
      }
    ).start(() => props.setPressed(!value))
  };
  
  useEffect(() => {
    animate(!target)
  }, [target]);

  return (
    <View style={styles.div}>
      <Text style={styles.h1}>LEDGER</Text>

      <View style={styles.sliderContainer}>
        <Animated.View style={{...styles.slider, transform: [{translateX: translate}, {translateY: 0}]}}/>
        <Text onPress={() => setTarget(0)} style={{...styles.sliderOptions, color: !props.pressed ? 'green' : 'white'}}>TO BUY</Text>
        <Text onPress={() => setTarget(114)} style={{...styles.sliderOptions, color: props.pressed ? 'green' : 'white'}}>TO PAY</Text>
      </View>

      <TouchableOpacity onPress={() => props.outerSets.page('addLedger')} activeOpacity={0.75} style={styles.iconDiv}>
        <FontAwesomeIcon  icon={faPlus} color='white' size={30} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  div: {
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScreen,
    height: verticalScreen * 0.18,
    position: 'absolute',
    top: verticalScreen * 0.12,
  },
  h1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
  },
  sliderContainer: {
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    width: horizontalScreen * 0.65,
    height: verticalScreen * 0.078,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(188, 188, 188, 0.5)',
  },
  slider: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: 116,
    height: 55,
    borderRadius: 1000,
    left: 0,
  },
  sliderOptions: {
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 23,
    borderRadius: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconDiv: {
    position: 'absolute',
    right: 35,
    bottom: -400,
    zIndex: 1,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 55, 32, 0.9)',
    padding: 12,
  },
})