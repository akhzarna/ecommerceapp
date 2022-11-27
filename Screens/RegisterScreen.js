import React, { useState } from "react";
import {View, Text, StyleSheet,Alert} from "react-native";
import {Button, Input} from "react-native-elements";

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    
    return (
        <View style = {styles.container}>
           <Input placeholder="enter email" label="email" leftIcon={{type:"material", name:"email"}} value={email} 
           onChangeText={text=> setEmail(text)}/>
           <Input placeholder="enter name" label="Name" leftIcon={{type:"material", name:"badge"}} value={name} 
           onChangeText={text=> setName(text)}/>
           <Input placeholder="enter Password" label="Password" leftIcon={{type:"material", name:"lock"}} value={password} 
           onChangeText={text=> setPassword(text)} secureTextEntry/>
           <Input placeholder="Enter Your Image URL" label="Profile Picture" 
           leftIcon={{type:"material", name:"face"}} value={imageURL} 
           onChangeText={text=> setImageURL(text)}/>

           <Button title = 'Register' style = {styles.button} onPress={()=>navigation.navigate('Register')}/>
        </View>
    )
}

export default RegisterScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})