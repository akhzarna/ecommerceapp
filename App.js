import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useEffect, useState } from 'react';
import Product from './Product';
import BookMark from './BookMark';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Product" component={Product} options={{ title: 'Product' }} />
      <Stack.Screen name="BookMark" component={BookMark} options={{ title: 'BookMark' }} />

    </Stack.Navigator>
   
  </NavigationContainer>
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
