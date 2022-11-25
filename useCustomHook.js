import React from 'react';
import {useState,useEffect} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
export default function App() {
    const useCustomHooks= async () => {
        try {
          await AsyncStorage.setItem(
          Data);
        } catch (error) {
          // Error saving data
        }
      };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
