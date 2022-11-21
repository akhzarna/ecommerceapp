// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('Error storing product details', error);
  }
}

const getItem = async (key) => {
  try {
    const value = JSON.parse(await AsyncStorage.getItem(key));
    return value;
  } catch (error) {
    console.log("Error getting product details", error);
  }
}

export default {
  getItem,
  setItem,
}