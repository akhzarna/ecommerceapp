import { Text, View } from "react-native";
import React from "react";
import { theStyle } from "../stylesheets/Stylesheet";

export function HeadingSignIn({ title = "Heading" }) {
  return (
    <View info="heading" style={[theStyle.center, theStyle.padding]}>
      <Text style={[theStyle.h1, { color: "#3a86ff" }]}>{title}</Text>
    </View>
  );
}
