import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { data } from "../../data";
import TabBarProfile from "../../TopBar/TopBarProfile";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ height: height / 3 }}>
        {/* Header */}
        <View style={styles.header}>
          {/* Header Left */}
          <View style={styles.headerLeft}>
            <Feather
              name={"lock"}
              size={16}
              color={"black"}
              style={{ marginHorizontal: 5 }}
            />
            <Text
              style={{ marginHorizontal: 10, fontSize: 18, fontWeight: "bold" }}
            >
              {data.users[0].username}
            </Text>
          </View>

          {/* Header Right */}
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                alert("Gönderi Ekleme Sayfası");
              }}
            >
              <Feather
                name={"plus-square"}
                size={24}
                color={"black"}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Profil Menüsü Aç");
              }}
            >
              <Ionicons
                name={"reorder-three-outline"}
                size={34}
                color={"black"}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Detail */}
        <View style={styles.header}>
          <View
            style={{
              width: width / 4,
            }}
          >
            <Image source={data.users[0].photo} style={styles.profileImage} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: width / 1.4,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                alert("Gönderiler Kısmı");
              }}
              style={styles.textBar}
            >
              <Text style={{ fontWeight: "bold" }}>0</Text>
              <Text>Gönderi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (data.users[0].followers.length == 0) {
                  alert("Takip Ettiğin kişi yok.");
                } else {
                  var followersUsers = "";
                  data.users[0].followers.map((item) => {
                    followersUsers = followersUsers + " \n " + item;
                  });
                  alert(followersUsers);
                }
              }}
              style={styles.textBar}
            >
              <Text style={{ fontWeight: "bold" }}>
                {data.users[0].followers.length}
              </Text>
              <Text>Takipçi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (data.users[0].following.length == 0) {
                  alert("Takip Ettiğin kişi yok.");
                } else {
                  var followingUsers = "";
                  data.users[0].following.map((item) => {
                    followingUsers = followingUsers + " \n " + item;
                  });
                  alert(followingUsers);
                }
              }}
              style={styles.textBar}
            >
              <Text style={{ fontWeight: "bold" }}>
                {data.users[0].following.length}
              </Text>
              <Text>Takip</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Content */}
        <View style={{ ...styles.header, flexDirection: "column" }}>
          <Text>Serhat TÜRKMEN</Text>
          <Text>...</Text>
        </View>

        {/* Profile Setting */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              alert("Profil Düzenle Sayfası");
              console.log("Profil Düzenle Sayfası");
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Profili Düzenle</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabBarProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    width: width,
    height: height,
  },
  header: {
    flexDirection: "row",
    width: width - 20,
    margin: 10,
  },
  headerLeft: {
    width: width / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 5,
  },
  headerRight: {
    width: width / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 20,
  },

  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
  },
  textBar: {
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "white",
    borderWidth: 1,
    width: width - 30,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});
