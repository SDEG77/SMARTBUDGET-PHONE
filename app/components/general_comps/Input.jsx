import { StyleSheet, TextInput, React } from 'react-native'

function Input({placeholder, 
  width = 280, 
  height = 40, 
  inputMode = 'text', 
  fontSize = 17, 
  center = false, 
  marginBottom = 10, 
  onChangeText,
  value
}){
  
    return (
    <TextInput value={value} onChangeText={onChangeText} inputMode={inputMode} style={{...styles.input, 
      height: height, 
      width: width, 
      fontSize: fontSize,
      textAlign: center ? 'center' : 'left',
      marginBottom: marginBottom,
    }} placeholder={placeholder} />
  )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    padding: 0,
    borderColor: 'rgba(128, 128, 128, 0.7)',
    borderWidth: 2,
    borderRadius: 10,
  },
});