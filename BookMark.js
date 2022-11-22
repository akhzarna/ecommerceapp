import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';


import React, { Component, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function Home(props) {
    const route = useRoute();
    
    

    useEffect(() => {


        
 
 
      },[]);
    
    return(
      
       <Text> {route.params.product}</Text>
       
       
        
    )
}