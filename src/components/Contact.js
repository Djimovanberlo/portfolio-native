import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Group } from "react-native";

import Github from "../img/icons/Github.png";
import LinkedIn from "../img/icons/LinkedIn.png";

export default function Contact() {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{ resizeMode: "cover", width: 35, height: 35 }}
          source={LinkedIn}
        />
        <Image
          style={{ resizeMode: "cover", width: 35, height: 35 }}
          source={Github}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>+31 (0) 6 34 85 85 54</Text>
        <Text>djimovanberlo@gmail.com</Text>
        <Text>Rampe du Val 9b2</Text>
        <Text>1348 Ottignies-Louvain-La-Neuve</Text>
        <Text>Belgium</Text>
      </View>
    </View>
  );
}
