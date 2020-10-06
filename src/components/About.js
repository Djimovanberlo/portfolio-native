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
            I like to play with some code, cook up some games and develop some
            dinner. In july I graduated from the Codaisseur academy, an
            intensive full stack JavaScript bootcamp. I have been coding since.
            In this portfolio you'll find my resume, info about me and projects
            have been working on. Get in touch!
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
