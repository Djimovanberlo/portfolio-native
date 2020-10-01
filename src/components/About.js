import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
// import Djimo from "../img";

export default function About() {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require("../img/Djimo.jpg")} />
        <View>
          <Text style={styles.nameStyle}>Djimo van Berlo</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </View>
        <Button title="Download Resume"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    padding: 25,
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  infoContainer: {
    width: 300,
  },
  nameStyle: {
    fontSize: 20,
    paddingTop: 25,
  },
  textStyle: {
    textAlign: "justify",
    paddingTop: 25,
    paddingBottom: 25,
  },
});
