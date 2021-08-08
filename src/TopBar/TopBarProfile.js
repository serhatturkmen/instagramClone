import "react-native-gesture-handler";

import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PostForTopBar from "./PostForTopBar";
import ReelForTopBar from "./ReelForTopBar";

const Tab = createMaterialTopTabNavigator();

export default function TabBarProfile({ navigaton }) {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBarOptions={{ activeTintColor: "black" }}
    >
      <Tab.Screen
        name="Posts"
        component={PostForTopBar}
        options={{
          tabBarLabel: () => (
            <MaterialCommunityIcons name="grid" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelForTopBar}
        options={{
          tabBarLabel: () => (
            <MaterialCommunityIcons
              name="play-circle-outline"
              color={"black"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
