import React from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { data } from "../data";
const width = Dimensions.get("screen").width;

export default function PostForTopBar({ navigation }) {
  return (
    <View style={{ width: width }}>
      <FlatList
        style={{ width: width }}
        keyExtractor={({ item, index }) => {
          return index;
        }}
        data={data.users[0].posts}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onLongPress={() => {
                console.log("uzun bastı");
                
                console.log(item.postid);
              }}
              onPress={() => {
                navigation.navigate("PostComponentDetail", {
                  data: item,
                  user: data.users[0],
                });
              }}
              key={index}
              style={{ height: 130, width: width / 3 }}
            >
              <Image
                source={{ uri: item.media }}
                style={{ height: 130, width: width / 3 }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
