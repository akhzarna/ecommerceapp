import {
  // AsyncStorage,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theStyle } from "./stylesheets/Stylesheet";
import TheButton from "./utils/TheButton";
import { HeadingSignIn } from "./utils/SignInUtils";
// working
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const getUser = () => {
    AsyncStorage.getItem("user")
      .then((res) => {
        res = JSON.parse(res);
        console.log("is User? ", res);
        if (email == res.email && password == res.password) {
          console.log("Sign in=====> get user======>", res.email, res.password);
          ToastAndroid.showWithGravity(
            `User Signed In`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
          global.setAuth.setIsAuth(true);
        } else {
          ToastAndroid.showWithGravity(
            `User Not Exist`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
          );
        }
        console.log(
          "else Sign in=====> get user======>",
          email,
          res.email,
          password,
          res.password
        );
      })
      .catch((error) => {
        console.log("Sign in=====> get user error======>", error);
        ToastAndroid.showWithGravity(
          `User Doesn't Exist`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
        navigation.navigate("SignUpScreen");
      });
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      function () {
        console.log("Exit App - Screen: Signin");
        BackHandler.exitApp();
        return true;
      }
    );
    console.log("Exit Event added on Pressed back button");
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", function () {});
  }, []);
  // useFocusEffect(() => {
  //   BackHandler.exitApp();
  // }, [BackHandler]);
  return (
    <View style={[theStyle.flex, styles.body]}>
      <HeadingSignIn title={"Sign In"} />
      <View info="text fields" style={[theStyle.center]}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            console.log(text);
          }}
          keyboardType={"email-address"}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            console.log(text);
          }}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View info="buttons">
        <TheButton title={"Submit"} onPress={getUser} />
      </View>
      <View info="links">
        <View style={styles.sign}>
          <Text>Not registered yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 70 }}>
          <TheButton
            title={"Exit Screen"}
            onPress={() => {
              navigation.navigate("TabScreens");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#fefae0',
    padding: 10,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    width: "70%",
    // backgroundColor: '#fefae0',
    borderRadius: 30,
    // height: '18%',
    margin: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
  },
  sign: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
  },
  signup: {
    paddingLeft: 10,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "blue",
  },
});
