import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text>LINKEDIN GITHUB</Text>
      <Text>+31 (0) 6 34 85 85 54</Text>
      <Text>djimovanberlo@gmail.com</Text>
      <Text>Rampe du Val 9b2</Text>
      <Text>1348 Ottignies-Louvain-La-Neuve</Text>
      <Text>Belgium</Text>
    </View>
  );
}
