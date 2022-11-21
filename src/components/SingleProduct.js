import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppButton({ product }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(product.image);
  return (
    <View style={styles.itemContainer}>
      <View onPress={() => toggleSwitch}>
        {isEnabled && <MaterialCommunityIcons
          name='heart'
          size={35}
          color={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        />}
        {!isEnabled && <MaterialCommunityIcons
          name='heart-outline'
          size={35}
          color={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        />}
      </View>
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.sectionList}>{product.title}</Text>
      <Text style={(styles.sectionList, { color: "red", fontSize: 30 })}>
        Price: {product.price}$
      </Text>
      <Pressable
        onPress={() =>
          ToastAndroid.show("BUY NOW! Button Pressed", ToastAndroid.SHORT)
        }
        android_ripple={{ color: "#ffffff", borderRadius: 10 }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>BUY NOW!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionList: {
    color: "#003433",
    fontSize: 20,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 400,
    resizeMode: "center",
    marginBottom: 20,
  },
  itemContainer: {
    margin: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "red",
    padding: 20,
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 40,
    border: 2,
    margin: 10,
    color: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B2980",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
})

export default AppButton;