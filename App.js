import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import NavigationContainer from "react-native-navigation-container";
import { NavigationContainer } from "@react-navigation/native";
import Bookmarked from "./src/screens/Bookmarked";

import ProductScreen from "./src/screens/ProductScreen";
const App = (props) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
        ></Stack.Screen>
        <Stack.Screen name="Bookmarked" component={Bookmarked}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
