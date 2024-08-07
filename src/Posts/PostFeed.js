import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ImageZoom from "react-native-image-pan-zoom";

import moment from "moment";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function PostFeed({ data }) {
  const receivedData = data.post;
  const receivedUser = data.user;
  return (
    <View
      key={receivedData.postid}
      style={{ width: width, backgroundColor: "white" }}
    >
      {/* Profil Bar */}
      <View
        style={{
          width: width - 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={receivedUser.photo}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              marginHorizontal: 5,
            }}
          />
          <View>
            <Text style={{ fontWeight: "bold" }}>{receivedUser.username}</Text>
            <Text>{receivedData.location}</Text>
          </View>
        </View>
        <Ionicons name={"ellipsis-vertical"} color={"black"} size={20} />
      </View>

      {/* Image */}
      <View style={{ width: width, height: 450 }}>
        <ImageZoom
          cropWidth={width}
          cropHeight={450}
          imageWidth={width}
          imageHeight={450}
        >
          <Image
            source={{ uri: receivedData.media }}
            style={{ width: width, height: 450 }}
            resizeMode={"contain"}
          />
        </ImageZoom>
      </View>

      {/* Like / Comment / Share / Save Button */}
      <View style={{ marginHorizontal: 10, width: width - 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                alert("Beğen");
              }}
            >
              <Ionicons
                style={{ marginRight: 10 }}
                name={"heart-outline"}
                color={"black"}
                size={28}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Yorum");
              }}
            >
              <Ionicons
                style={{ marginRight: 10 }}
                name={"chatbubble-outline"}
                color={"black"}
                size={28}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Paylaş");
              }}
            >
              <Ionicons
                name={"paper-plane-outline"}
                color={"black"}
                size={28}
              />
            </TouchableOpacity>
          </View>
          <Text />
          <TouchableOpacity
            onPress={() => {
              alert("Kaydet");
            }}
          >
            <Ionicons name={"bookmark-outline"} color={"black"} size={28} />
          </TouchableOpacity>
        </View>

        {/* Like Number */}
        <Text style={{ fontWeight: "bold" }}>
          {receivedData.like.length} Beğenme
        </Text>

        {/* Content */}
        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>{receivedUser.username} </Text>
            {receivedData.content}
          </Text>
        </View>
      </View>

      {/* Comment */}
      <View style={{ marginHorizontal: 10, width: width - 20 }}>
        <Text style={{ color: "grey", fontSize: 12, marginVertical: 6 }}>
          {receivedData.comment.length} Yorumu Gör
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          width: width - 20,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          alert("Yorum ekle");
        }}
      >
        <Image
          source={receivedUser.photo}
          style={{ height: 30, width: 30, borderRadius: 30, marginRight: 10 }}
        />
        <Text style={{ color: "gray" }}>Yorum ekle...</Text>
      </TouchableOpacity>

      {/* Created Date From Now */}
      <View style={{ marginHorizontal: 10, width: width - 20 }}>
        <Text style={{ color: "grey", fontSize: 10, marginVertical: 6 }}>
          {moment(receivedData.createDate).fromNow()}
        </Text>
      </View>
    </View>
  );
}
