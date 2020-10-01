import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "./src/components/navigation";
// import { About, Projects, Contact } from "./src/components";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";

export default function App() {
  const [activeTab, set_activeTab] = useState(<About />);

  const tabSetter = (componentState) => {
    if (componentState === "about") {
      set_activeTab(<About />);
    } else if (componentState === "projects") {
      set_activeTab(<Projects />);
    } else if (componentState === "contact") {
      set_activeTab(<Contact />);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <Text>
        Open up Appqq.js to wwwest start workinaaag on your app! working @
        emulator!
      </Text>
      {activeTab}
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
