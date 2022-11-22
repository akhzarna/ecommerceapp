import {
  // AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { theStyle } from "./stylesheets/Stylesheet";
import { HeadingSignIn } from "./utils/SignInUtils";
import TheButton from "./utils/TheButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={[theStyle.flex, styles.body]}>
      <HeadingSignIn title={"Sign Up"} />
      <View info="text fields" style={[theStyle.center]}>
        <TextInput
          placeholder="First Name"
          value={fName}
          onChangeText={(text) => {
            setFName(text);
          }}
          keyboardType={"default"}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lName}
          onChangeText={(text) => {
            setLName(text);
          }}
          keyboardType={"default"}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType={"email-address"}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View info="buttons">
        <TheButton
          title={"Submit"}
          onPress={() => {
            let reg = {
              fName: fName,
              lName: lName,
              email: email,
              password: password,
            };
            setUser(reg);
            AsyncStorage.setItem("user", JSON.stringify(reg))
              .then(() => {
                ToastAndroid.showWithGravity(
                  `User Registered ${reg.fName}`,
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM
                );
                global.setAuth.setIsAuth(true);
              })
              .catch((err) => {
                ToastAndroid.showWithGravity(
                  `Error User Registered ${err}`,
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM
                );
              });
          }}
        />
      </View>
      <View info="links">
        <View style={styles.sign}>
          <Text>Already have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={styles.signup}>Sign In</Text>
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

export default SignUpScreen;

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#fefae0',
    padding: 10,
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
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
