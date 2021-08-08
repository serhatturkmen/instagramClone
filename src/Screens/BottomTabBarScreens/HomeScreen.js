import React from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StoriesComponent from "../../Stories/StoriesComponent";
import { data } from "../../data";
import PostFeed from "../../Posts/PostFeed";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function HomeScreen({ navigation }) {
  const videoRef = React.useRef(null);
  return (
    <ScrollView
      style={{ height: height, width: width, backgroundColor: "white" }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          justifyContent: "space-between",
          width: width - 40,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", fontStyle: "italic" }}>
          Instagram
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              alert("Yeni Gönderi Ekle");
            }}
            style={{ paddingRight: 15 }}
          >
            <Ionicons name={"add-circle-outline"} size={30} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("Bildirimler");
            }}
            style={{ paddingRight: 15 }}
          >
            <Ionicons name={"heart-outline"} size={30} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("Sohbet Penceresi");
            }}
          >
            <Ionicons name={"chatbubble-outline"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Story */}
      <View style={{ marginHorizontal: 10, width: width - 20 }}>
        <StoriesComponent />
      </View>

      {/* Posts */}
      <View>
        {data.users[0].posts.map((item) => (
          <PostFeed
            key={item.postid}
            data={{
              post: item,
              user: {
                photo: data.users[0].photo,
                username: data.users[0].username,
              },
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
