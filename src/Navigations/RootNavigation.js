import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigation from "./BottomTabBarNavigation";

import ProfileScreen from "../Screens/BottomTabBarScreens/ProfileScreen";
import ReelComponent from "../Reels/ReelComponent";
import PostComponentDetail from "../Posts/PostComponentDetail";

MainStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <MainStack.Navigator initialRouteName="BottomNavigation">
      <MainStack.Screen
        component={BottomTabNavigation}
        options={{ headerShown: false }}
        name={"BottomNavigation"}
      />
      <MainStack.Screen
        component={ReelComponent}
        options={{ headerShown: false }}
        name={"ReelComponent"}
      />
      <MainStack.Screen
        component={PostComponentDetail}
        options={{ headerShown: true, title: "Gönderi" }}
        name={"PostComponentDetail"}
      />
      <MainStack.Screen component={ProfileScreen} name={"profileScreen"} />
    </MainStack.Navigator>
  );
}
