import React, { useState } from "react";
import { Button, Text, View } from "react-native";

var ColorLayout = ({ColorName, onIncrese, onDecrese}) => {

    return(
        <View style={{margin:5, borderWidth:1, borderRadius:10}}>

            <Button title={"Increse "+ColorName} onPress={()=>{onIncrese()}} />
            <Button title={"Decrese "+ColorName} onPress={()=>{onDecrese()}} />
            
        </View>
    );

};
export default ColorLayout;