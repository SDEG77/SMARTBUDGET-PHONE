import { StyleSheet, Text, React } from 'react-native'

function BackBtn({onPress, size = 60}){
  return (
    <Text onPress={onPress} style={{...styles.back, fontSize: size, width: size}}>{'<'}</Text>
  )
}

export default BackBtn;

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: -5,
    left: 20,
    fontSize: 60,    
    width: 60,
    height: 'fit-content',
    color: 'gray',
    margin: 0,
  },
})