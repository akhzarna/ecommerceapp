import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Keyboard,Image,TouchableOpacity,Pressable,Linking,ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import image from "../assets/pexelsnature.jpg";
import gif from "../assets/Logo.gif";
import ama from "../assets/Ama2.gif";
import facebooklogo from "../assets/facebooklogo.png";
import googlelogo from "../assets/googlelogo.png";
import amazonlogo from "../assets/amazonlogo.png";
import applelogo from "../assets/applelogo.jpg"

export default function Login({ navigation }) {
  const [text, onChangeText] = React.useState("Enter username");
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={image}>
        <View style={styles.parent}>
          <View style={{flex:0.3,marginTop:10}}>  
         
         </View>
         <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}> 
          <TextInput
            style={styles.userin}
            value={text}
            onPress={() => (value = Keyboard)}
            onChangeText={onChangeText}
          />

          <TextInput style={styles.passin} value="Enter Password here" onPress={() => (value = Keyboard)} />
          <Pressable style={{marginTop:10}} onPress={()=>Linking.openURL('https://accounts.google.com/v3/signin/identifier?dsh=S-452283541%3A1663692917462663&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWqCv9AhU3TSWDHfFFF2MDyIwsJOt8NjNZHxAqSfnwgmbxYQ9CW_CiEoH2Xuluc_BSaOUK7EIw')}> 
            <Text style={{color:'white',width:150,textDecorationLine:'underline',marginLeft:120,textAlign:'center'}}> Forgot Password?</Text>
          </Pressable>
          <TouchableOpacity style={{borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'cyan',width:200,color:'blue',marginTop:10}} onPress={() => navigation.navigate("Home")}>
             <Text style={{fontSize:20}}> Login </Text> 
             </TouchableOpacity>
             <TouchableOpacity style={{borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'cyan',width:200,color:'blue',marginTop:20}} onPress={()=>Alert.alert(text)} >
             <Text style={{fontSize:20}}> Create Account </Text> 
             </TouchableOpacity>
          </View> 
          <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}> 
           <Text style={{color:'white',justifyContent:'center'}}>New Here? SignIn/SignUp Using</Text>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}> 

                <Pressable style={{flex:0.25}} onPress={()=>Linking.openURL('https://www.facebook.com/login')} >
                  <Image source={facebooklogo} style={{width:50,height:50}}/>
                  
                </Pressable>
                <Pressable style={{flex:0.25}} onPress={()=>Linking.openURL('https://accounts.google.com/v3/signin/identifier?dsh=S-452283541%3A1663692917462663&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWqCv9AhU3TSWDHfFFF2MDyIwsJOt8NjNZHxAqSfnwgmbxYQ9CW_CiEoH2Xuluc_BSaOUK7EIw')}>
                  <Image source={googlelogo} style={{width:50,height:50,marginLeft:10}}/>
                </Pressable>  
                <Pressable style={{flex:0.25}} onPress={()=>Linking.openURL('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Flog%2Fs%2F%3F_encoding%3DUTF8%26k%3Dlog%2520in%26ref_%3Dnav_custrec_newcust&prevRID=9P7S090G3X20B01R7VNN&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=usflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')}>
                  <Image source={amazonlogo} style={{width:50,height:50,marginLeft:20}}/>
                </Pressable>
                <Pressable style={{flex:0.25}} onPress={()=>Linking.openURL('https://appleid.apple.com/sign-in')}>
                  <Image source={applelogo} style={{width:50,height:50,marginLeft:30}}/>
                </Pressable>
                

            </View>
            {/* <TouchableOpacity style={{borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'cyan',width:150,height:30,color:'blue',marginTop:10}} onPress={()=>{navigation.navigate("Sectionlist")}}>
                  <Text style={{fontSize:20}}> Sectionlist</Text> 
                  </TouchableOpacity> */}
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 85,
  },
  ImageBackground: {
    height: "1600",
    width: "720",
    alignItems: "center",
    justifyContent: "center",
  },
  userin: {
    marginTop: 10,
    backgroundColor: "white",
    width: 250,
    textAlign: "center",
    alignSelf: "center",
  },
  passin: {
    marginTop: 10,
    backgroundColor: "white",
    width: 250,
    textAlign: "center",
    alignSelf: "center",
  },
});
