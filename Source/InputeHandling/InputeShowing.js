import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputeShowing(){

    [uname, setName] = useState("User");
    [pwd, setPwd] = useState('');
    if(uname===''){
        setName("User")
    }

    return(
        <View>

            <Text style={{margin:10, fontSize:15}}>Using useState </Text>
            <Text style={{margin:10, fontSize:20}}>Welcome, {uname}. </Text>

            <Text style={styles.text}>User Name :</Text>
            <TextInput style={styles.inpute}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={(name)=>setName(name)}/>

            <Text style={styles.text}>Password :</Text>
            <TextInput style={styles.inpute}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={(Pwd)=>setPwd(Pwd)}/>
            {pwd.length < 4 ? <Text> Must Be, 4 Character Password Required..!</Text>:<Text> Done...</Text>}

        </View>
    );

  

} 
var styles = StyleSheet.create({
    inpute:{
        borderRadius:10,
        borderWidth : 2,
        borderColor : 'grey',
        margin : 10,
        padding:8,
        fontSize:20
    },
    text:{
        marginTop:5,
        marginLeft:10,
        fontSize:20
    }
})