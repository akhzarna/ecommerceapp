import React, {useEffect, useState, useContext} from 'react';
import {
  AsyncStorage,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();
storage.set('user.name', 'asad');

import bg from '../../../assets/images/splash.jpeg';
import {StackActions} from '@react-navigation/native';
import {useUser} from '../../utils/useUser';

export default function SplashScreen(props) {
  // console.log('navigation=========> ', props.navigation);
  const {getAllUsers, setUser} = useUser('hello');
  const getUser = (email, password) => {
    AsyncStorage.getItem('user')
      .then(res => {
        console.log('1. get user======>', res);
        if (res && global.setAuth.isAuth) {
          global.setAuth.setIsAuth(true);
          // props.navigation.navigate('SignInScreen');
        } else {
          // global.setAuth.setIsAuth(false);
          props.navigation.navigate('SignInScreen');
        }
      })
      .catch(error => {
        console.log('1. get user error======>', error);
      });
  };
  const getUserMMKV = (email, password) => {
    // var a = storage.clearAll('user.name');
    // console.log('a==========> ', a);
    setUser();
    // var res = getAllUsers();
    // console.log('Get All Users call ========> ', res);
  };
  // useEffect(getUser, [props.navigation]);
  useEffect(getUserMMKV, [props.navigation]);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      {/* <ImageBackground source={bg} /> */}
      <Image source={bg} style={{width: '100%', height: '100%'}} />
    </View>
  );
}

const styles = StyleSheet.create({});
