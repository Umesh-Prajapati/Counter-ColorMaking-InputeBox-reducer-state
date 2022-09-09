import React,{ useReducer } from "react";
import { Button, View } from "react-native";
import ReducerColorLayout from "./ReducerColorLayout";

var ReducerUse = () =>  { 

    var reducer=(state, action)=>{
         switch(action.changeToColor){
            case 'red':
                return state.red > 256 || state.red + action.amount < 0
                ? state
                : {...state, red : state.red + action.amount};
            case 'green':
                return state.green > 256 || state.green + action.amount < 0
                ? state
                : {...state, green : state.green + action.amount};
            case 'blue':
                return state.blue > 256 || state.blue + action.amount < 0
                ? state
                : {...state, blue : state.blue + action.amount};
            }
    }

    const b = [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0});
    console.log(state);
    var COLOR_INCREMENT = 15

    return(
        <View>

            <View
                style={{width:400, height:100, backgroundColor:'rgb('+state.red+','+state.green+','+state.blue+')'}}
            />

            <ReducerColorLayout
            ColorName="Red"
            onIncrese={() => {dispatch({changeToColor:'red', amount:COLOR_INCREMENT})}}
            onDecrese={() => {dispatch({changeToColor:'red', amount:-1*COLOR_INCREMENT})}}
            />
            <ReducerColorLayout
            ColorName="Green"
            onIncrese={() => {dispatch({changeToColor:'green', amount:COLOR_INCREMENT})}}
            onDecrese={() => {dispatch({changeToColor:'green', amount:-1*COLOR_INCREMENT})}}
            />
            <ReducerColorLayout
            ColorName="Blue"
            onIncrese={() => {dispatch({changeToColor:'blue', amount:COLOR_INCREMENT})}}
            onDecrese={() => {dispatch({changeToColor:'blue', amount:-1*COLOR_INCREMENT})}}
            />

            <Button title="check log" onPress={()=>{
                console.log("---------");
                console.log(state);
            }} />

        </View>
    );

} 

export default ReducerUse

// var reducer=(state, action)=>{
//     switch(action.changeToColor){
//        case 'red':
//            return {...state, red : state.red + action.amount};
//        case 'green':
//            return {...state, green : state.green + action.amount};
//        case 'blue':
//            return {...state, blue : state.blue + action.amount};
//        }
// }