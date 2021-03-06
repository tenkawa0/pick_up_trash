import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import MainNav from "./MainNav";

const Stack = createStackNavigator();

const RootNav: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="login">
        <Stack.Screen {...MainNav} />
        <Stack.Screen {...Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;