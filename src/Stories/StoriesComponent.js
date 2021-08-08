import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { data } from "../data";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function StoriesComponent({ navigation, route }) {
  const stories = data.users[0].stories;
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ width: width, height: 100 }}
    >
      <TouchableOpacity
        onPress={() => {
          alert("Yeni Hikaye Ekle");
        }}
        style={{
          width: 70,
          marginRight: 10,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={data.users[0].photo}
          style={{
            height: 70,
            width: 70,
            borderRadius: 70,
          }}
        />
        <Text>Hikayen</Text>
        <View
          style={{
            borderRadius: 30,
            alignSelf: "center",
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            right: 0,
          }}
        >
          <Ionicons name={"add-circle-sharp"} color={"blue"} size={24} />
        </View>
      </TouchableOpacity>

      {data.users.map((item) => {
        if (stories.length !== 0) {
          if (item.userid !== 1) {
            return (
              <TouchableOpacity
                key={item.userid}
                onPress={() => {
                  alert("Hikaye Sayfası");
                }}
                style={{
                  width: 70,
                  marginRight: 10,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 70,
                    borderWidth: 2,
                    borderColor: "red",
                  }}
                >
                  <Image
                    source={item.photo}
                    style={{
                      height: 65,
                      width: 65,
                      borderRadius: 65,
                      borderWidth: 3,
                      borderColor: "white",
                    }}
                  />
                </View>
                <Text>{item.username}</Text>
              </TouchableOpacity>
            );
          }
        }
      })}
    </ScrollView>
  );
}
