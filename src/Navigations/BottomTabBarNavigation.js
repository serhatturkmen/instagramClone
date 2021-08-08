import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  ReelScreen,
  ProfileScreen,
  SearchScreen,
  StoreScreen,
} from "../Screens/BottomTabBarScreens/index";

import { Image } from "react-native";

import { data } from "../data";
import { Icons, Colors, Styles } from "../Constants/index";

const mybottomtab = createBottomTabNavigator();

const iconSize = Styles.BottomBarStyle.iconSize;
const iconColor = Styles.BottomBarStyle.iconColor;

export default function BottomTabNavigation() {
  return (
    <mybottomtab.Navigator initialRouteName={"HomeScreen"}>
      <mybottomtab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: (props) => {
            const icon = props.focused ? Icons.home : Icons.homeFocused;
            return <Ionicons name={icon} size={iconSize} color={iconColor} />;
          },
        }}
        name={"HomeScreen"}
        component={HomeScreen}
      />
      <mybottomtab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: (props) => {
            const icon = props.focused ? Icons.search : Icons.searchFocused;
            return <Ionicons name={icon} size={iconSize} color={iconColor} />;
          },
        }}
        name={"SearchScreen"}
        component={SearchScreen}
      />
      <mybottomtab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: (props) => {
            const icon = props.focused
              ? Icons.reelsScreen
              : Icons.reelsScreenFocused;
            return <Ionicons name={icon} size={iconSize} color={iconColor} />;
          },
        }}
        name={"ReelsScreen"}
        component={ReelScreen}
      />
      <mybottomtab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: (props) => {
            const icon = props.focused
              ? Icons.storeScreen
              : Icons.storeScreenFocused;
            return <Ionicons name={icon} size={iconSize} color={iconColor} />;
          },
        }}
        name={"StoreScreen"}
        component={StoreScreen}
      />
      <mybottomtab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: (props) => {
            const borderWidth = props.focused ? 2 : 0;
            return (
              <Image
                source={data.users[0].photo}
                style={{
                  ...Styles.BottomBarStyle.photo,
                  borderWidth: borderWidth,
                }}
              />
            );
          },
        }}
        name={"ProfileScreen"}
        component={ProfileScreen}
      />
    </mybottomtab.Navigator>
  );
}
