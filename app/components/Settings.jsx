import { Dimensions } from "react-native";

export const horizontalScreen = Dimensions.get('window').width; 
export const verticalScreen = Dimensions.get('window').height;

export const LG = {
  colors:['#063831', '#036742', '#036742', '#035a3d', '#063831'], 
  locations: [0, 0.25, 0.5, 0.75, 1], 
  start:{x: 0, y: 0}, 
  end:{x: 1, y: 0}, 
};
