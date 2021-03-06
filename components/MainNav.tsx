import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Picking from "./Picking";
import Logout from "./Logout";

const Tab = createBottomTabNavigator();

const MainNav: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen {...Home} />
      <Tab.Screen {...Picking} />
      <Tab.Screen {...Logout} />
    </Tab.Navigator>
  );
};

export default { name: "main", component: MainNav };
