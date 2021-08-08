import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import { data } from "../data";
const profile = data.users[0];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height - 50;

export default function ReelDetailScreen({ navigation }) {
  const reels = data.users[0].reels;
  const [currIndex, setCurrIndex] = React.useState(0);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    videoRef.current = null;
    console.log("test");
  });

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: width, height: height }}>
        {/* Video */}
        <Video
          volume={7.0}
          // volume={0}
          style={{ width: width, height: height }}
          width={width}
          height={height}
          shouldPlay={index !== currIndex ? false : true}
          resizeMode={"stretch"}
          isLooping={true}
          source={item.media}
          ref={(ref) => {
            videoRef.current = ref;
          }}
        />

        {/* Header */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: width - 20,
            padding: 10,
            margin: 10,
            alignContent: "center",
            flexDirection: "row",
            height: 40,
            alignItems: "center",
          }}
        >
          <View style={{ width: width - 80 }}>
            <Text style={{ fontSize: 24, color: "white" }}>Reels</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              alert("Yeni Reels Ekle");
            }}
          >
            <Feather
              name={"camera"}
              size={24}
              color={"white"}
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
        </View>

        {/* Like / Comment / Share / Three Dot / Music Profile Image */}
        <View
          style={{
            position: "absolute",
            bottom: 40,
            right: 10,
            padding: 10,
            alignContent: "center",
            flexDirection: "column",
            height: height / 2.4,
          }}
        >
          {/* Like */}
          <View style={{ marginBottom: 15, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Beğen");
              }}
            >
              <Ionicons name={"heart-outline"} color={"white"} size={26} />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>{item.like.length}</Text>
          </View>

          {/* Comment */}
          <View style={{ marginBottom: 15, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Yorum yap");
              }}
            >
              <Ionicons
                name={"chatbubble-outline"}
                color={"white"}
                size={26}
                style={{ paddingVertical: 10 }}
              />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>{item.comment.length}</Text>
          </View>

          {/* Share */}
          <View style={{ marginBottom: 15, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Paylaş");
              }}
            >
              <Ionicons
                name={"paper-plane-outline"}
                size={26}
                color={"white"}
                style={{ marginHorizontal: 5, paddingVertical: 10 }}
              />
            </TouchableOpacity>
          </View>

          {/* Three Dots */}
          <View style={{ marginBottom: 15, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Seçenekler");
              }}
            >
              <Ionicons
                name={"ellipsis-vertical"}
                size={26}
                color={"white"}
                style={{ marginHorizontal: 5, paddingVertical: 10 }}
              />
            </TouchableOpacity>
          </View>

          {/* Music Profile Images */}
          <View style={{ marginBottom: 15, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Müzik Profili");
              }}
            >
              <Image
                source={profile.photo}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "blue",
                  borderRadius: 5,
                  marginRight: 5,
                  borderColor: "white",
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profil Detay */}
        <View
          style={{
            position: "absolute",
            bottom: 65,
            left: 0,
            width: width - 20,
            margin: 10,
            alignContent: "center",
            flexDirection: "column",
            height: 65,
          }}
        >
          {/* Profile Name / Image */}
          <TouchableOpacity
            onPress={() => {
              alert("Profil Sayfası");
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={profile.photo}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "blue",
                borderRadius: 40,
                marginRight: 5,
              }}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              {profile.username}
            </Text>
          </TouchableOpacity>

          {/* Content */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              width: width / 1.6,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }} numberOfLines={1}>
              {item.content}
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert("Devamı Butonuna basıldı.");
              }}
            >
              <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>
                ..devamı
              </Text>
            </TouchableOpacity>
          </View>

          {/* Music */}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name={"musical-note"}
              color={"white"}
              size={16}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>
              {profile.username}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const onChangeIndex = ({ index, prevIndex }) => {
    console.log(index);
    setCurrIndex(index);
  };

  return (
    <View style={{ width: width, height: height }}>
      <SwiperFlatList
        vertical={true}
        data={reels}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
        renderItem={({ item, index }) => {
          return renderItem({ item, index });
        }}
        style={{ width: width, height: height }}
      />
    </View>
  );
}
