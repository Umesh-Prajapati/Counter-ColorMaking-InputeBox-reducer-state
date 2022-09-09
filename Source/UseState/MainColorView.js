import React, {useState} from 'react';
import {Text, View} from 'react-native';

import ColorLayout from './ColorLayout';

var MainColorview = () => {
  var [red, setRed] = useState(0);
  var [green, setGreen] = useState(0);
  var [blue, setBlue] = useState(0);

  var COLORS_INCREDECRE = 15;

  function setColor(color, change) {
    
    switch(color){
        case 'red':
            red + COLORS_INCREDECRE > 256 || red + COLORS_INCREDECRE < 0 ? null : setRed(red+change);
            return;
        case 'green':
            green + COLORS_INCREDECRE > 256 || green + COLORS_INCREDECRE < 0 ? null : setGreen(green+change);
            return;
        case 'blue':
            blue + COLORS_INCREDECRE > 256 || blue + COLORS_INCREDECRE < 0 ? null : setBlue(blue+change);
            return;
        
    }
  }

  return (
    <View style={{margin: 5}}>
      <Text> Using useState</Text>
      <View
        style={{
          width: 375,
          height: 50,
          backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')',
        }}></View>

      

      <ColorLayout
        ColorName="Red"
        onIncrese={() => {
          setColor('red', COLORS_INCREDECRE);
        }}
        onDecrese={() => {
          setColor('red', -1 * COLORS_INCREDECRE);
        }}
    />

    <ColorLayout
        ColorName="Green"
        onIncrese={() => {
          setColor('green', COLORS_INCREDECRE);
        }}
        onDecrese={() => {
          setColor('green', -1 * COLORS_INCREDECRE);
        }}
    />

    <ColorLayout
        ColorName="Blue"
        onIncrese={() => {
          setColor('blue', COLORS_INCREDECRE);
        }}
        onDecrese={() => {
          setColor('blue', -1 * COLORS_INCREDECRE);
        }}
    />
    
    </View>
  );
};
export default MainColorview;




// function setColor(color, change) {
//     if (color === 'red') {
//       if (red + change > 256 || red + change < 0) {
//         return;
//       } else {
//         setRed(red + change);
//       }
//     }
//     if (color === 'green') {
//         if (green + change > 256 || green + change < 0) {
//           return;
//         } else {
//           setGreen(green + change);
//         }
//       }
//       if (color === 'blue') {
//         if (blue + change > 256 || blue + change < 0) {
//           return;
//         } else {
//           setBlue(blue + change);
//         }
//       }
//   }