import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";

import { data } from "../data";

const width = Dimensions.get("screen").width;

import { useNavigation } from "@react-navigation/native";

export default function ReelForTopBar() {
  const navigation = useNavigation();
  return (
    <View style={{ width: width }}>
      <FlatList
        style={{ width: width }}
        keyExtractor={({ item, index }) => {
          return index;
        }}
        data={data.users[0].reels}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onLongPress={() => {
                console.log("uzun basıldı.");
              }}
              onPress={() => {
                navigation.push("ReelComponent", {
                  data: item,
                  user: data.users[0],
                });
              }}
              key={index}
              style={{
                height: 230,
                width: width / 3,
                borderWidth: 2,
                borderColor: "white",
              }}
            >
              <ImageBackground
                source={item.thumbnails}
                style={{
                  height: 230,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    left: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={"play-outline"} color={"white"} size={14} />
                  <Text style={{ color: "white", marginLeft: 5 }}>
                    {item.watch.length}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
