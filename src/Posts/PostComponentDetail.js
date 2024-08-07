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

export default function PostComponentDetail({ navigation, route }) {
  const receivedData = route.params.data;
  const receivedUser = route.params.user;

  console.log(receivedUser);

  return (
    <ScrollView
      style={{ width: width, height: height, backgroundColor: "white" }}
    >
      {/* Profil Bar */}
      <View
        style={{
          width: width - 10,
          marginHorizontal: 5,
          marginVertical: 5,
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
        <Ionicons name={"ellipsis-vertical"} color={"black"} size={30} />
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
          <Text></Text>
          <Ionicons name={"bookmark-outline"} color={"black"} size={28} />
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

        <View>
          <Text style={{ color: "grey", fontSize: 12, marginVertical: 6 }}>
            {moment(receivedData.createDate).fromNow()}
          </Text>
        </View>
      </View>

      {/* Comment */}
      <View style={{ marginHorizontal: 10, width: width - 20 }}>
        {receivedData.comment.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              backgroundColor: "white",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: 30,
              }}
              onPress={() => {
                alert("Kullanıcı resmine tıklandı");
              }}
            >
              <Image
                source={receivedUser.photo}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                width: width - 90,
                paddingLeft: 5,
              }}
            >
              <View>
                <Text>
                  <TouchableOpacity
                    onPress={() => {
                      alert("Kullanıcı adına tıklandı");
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      {receivedUser.username}{" "}
                    </Text>
                  </TouchableOpacity>
                  {item.content}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 10, color: "gray", marginRight: 20 }}>
                  {moment(item.createDate).fromNow()}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    alert("Yoruum yanıtla tuşuna basıldı.");
                  }}
                >
                  <Text style={{ fontSize: 10, color: "gray" }}>Yanıtla</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                alignContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                alert("Yorum beğenme tuşuna basıldı.");
              }}
            >
              <Ionicons name={"heart-outline"} size={14} color={"gray"} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
