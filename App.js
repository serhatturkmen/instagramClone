import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/Navigations/RootNavigation";
import moment from "moment";

export default function App() {
  moment.updateLocale("en", {
    relativeTime: {
      future: "%s",
      past: "%s",
      s: "%d sn",
      ss: "%d sn",
      m: "1 dk",
      mm: "%d dk",
      h: "1 saat",
      hh: "%d saat",
      d: "1 gün",
      dd: "%d gün",
      w: "1 hafta",
      ww: "%d hafta",
      M: "1 ay",
      MM: "%d ay",
      y: "1 yıl",
      yy: "%d yıl",
    },
  });
  return (
    <NavigationContainer>
      <StatusBar />
      <RootNavigation />
    </NavigationContainer>
  );
}

// 33 dakika
