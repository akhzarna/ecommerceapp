import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useStateValue from "../../hooks/useStateValue";
import Home from "../screens/Home";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Toast from "react-native-toast-message";
import Flatlist from "../screens/FlatList";

const Stack = createNativeStackNavigator();

const Screens = () => {
  const [{ user }] = useStateValue();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? "home" : "signin"}>
          {user ? (
            <>
              <Stack.Screen
                name="home"
                component={Home}
                options={{
                  title: "Home",
                }}
              />
              <Stack.Screen
                name="flatlist"
                component={Flatlist}
                options={{
                  title: "Ecommerce",
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="bottom" bottomOffset={20} />
    </>
  );
};

export default Screens;
