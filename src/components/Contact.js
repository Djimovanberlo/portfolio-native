import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Group,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function Contact() {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => window.open("https://github.com/Djimovanberlo")}
        >
          <Image
            style={{ resizeMode: "cover", width: 35, height: 35 }}
            source={require("../img/icons/Github.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            window.open("https://www.linkedin.com/in/djimo-van-berlo/")
          }
        >
          <Image
            style={{ resizeMode: "cover", width: 35, height: 35 }}
            source={require("../img/icons/LinkedIn.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>+31 (0) 6 34 85 85 54</Text>
        <TouchableOpacity
          onPress={() => window.open("mailto:djimovanberlo@gmail.com")}
        >
          <Text>djimovanberlo@gmail.com</Text>
        </TouchableOpacity>
        <Text>Rampe du Val 9b2</Text>
        <Text>1348 Ottignies-Louvain-La-Neuve</Text>
        <Text>Belgium</Text>
      </View>
    </View>
  );
}
