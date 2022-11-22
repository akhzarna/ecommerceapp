
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import BookMark from './BookMark';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {

  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {console.log('Return')}

      <Button
          title="BookMark"
          onPress={() =>
          navigation.navigate('BookMark',{id:'hef34231'})
        }
        />
    </View>
)
    }