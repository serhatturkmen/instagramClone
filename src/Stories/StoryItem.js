import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function StoryItem({ navigation, route }) {
  const data = route.params.data;
  console.log(route);
  
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}
