import React, {useReducer} from "react";
import { Button, Text, View } from "react-native";

function Counter(){

    function reducer(state, action){

        switch(action.type){
            case 'increment':
                return {...state, count:state.count + action.payload}
            case 'decrement':
                if(state.count === 0){
                    return state;
                }
                return {...state, count:state.count + action.payload}
        }
        return state;
    }

    [state, dispatch] = useReducer(reducer, {count:0});
    console.log(state);



    return(
        <View>

            <Text>
            Usign Reducer
            </Text>

            <Button title="increment" onPress={()=>dispatch({type:'increment',payload:1})} />
            <Button title="decrement" onPress={()=>dispatch({type:'decrement',payload:-1})}/>

        <Text>
            Counter is Count : {state.count}
        </Text>

        

        </View>
    );
}

export default Counter;