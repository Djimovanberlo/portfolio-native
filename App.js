import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// import { About, Projects, Contact } from "./src/components";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";

export default function App() {
  const [activeTab, set_activeTab] = useState(<About />);

  return (
    <View style={styles.container}>
      <View style={styles.buttonRowContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="About"
            onPress={() => set_activeTab(<About />)}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Projects"
            onPress={() => set_activeTab(<Projects />)}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Contact"
            onPress={() => set_activeTab(<Contact />)}
          ></Button>
        </View>
      </View>
      <Text>{activeTab}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonRowContainer: {
    paddingTop: 30,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

// To run Android Studio:
// ~cd /Code/android-studio/bin
// ~./studio.sh
