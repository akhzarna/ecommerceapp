import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {


  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {console.log('Return')}


      {/* <Button title='Minus' onPress={()=>setState({count:1})} /> */}
      
      

        <Button
          title="Go to Screen2"
          onPress={() =>
          navigation.navigate('Screen2',{})
        }
        />

       
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});