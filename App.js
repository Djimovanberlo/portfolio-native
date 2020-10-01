import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "./src/components/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text>
        Open up Appqq.js to wwwest start workinaaag on your app! working @
        emulator!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// To run Android Studio:
// ~cd /Code/android-studio/bin
// ~./studio.sh
