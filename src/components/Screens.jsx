import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useStateValue from "../../hooks/useStateValue";
import Home from "../screens/Home";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const Screens = () => {
  const [{ user }] = useStateValue();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "home" : "signin"}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{
            title: "SignIn",
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            title: "SignUp",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
