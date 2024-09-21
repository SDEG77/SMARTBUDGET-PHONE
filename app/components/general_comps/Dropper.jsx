import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { horizontalScreen, verticalScreen } from '../Settings';

export default function Dropper({
  data=[
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ],
  set,
  placeholder='Select an item'
}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'rgba(55, 55, 247, 0.5)' }]}
      containerStyle={styles.list}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      itemContainerStyle={styles.itemContainerStyle}

      data={data}
      value={value}

      search
      mode='default'
      maxHeight={200}

      labelField="label"
      valueField="value"

      placeholder={!isFocus ? placeholder : '...'}
      searchPlaceholder="Search..."

      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        set(item.value);
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    width: horizontalScreen * 0.78,
    height: 40,
    borderColor: 'rgba(128, 128, 128, 0.7)',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  list: {
    borderColor: 'black',
    borderWidth: 1.5,
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16, 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 5,
  },
  itemContainerStyle: {
    borderColor: 'lightgray',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
})