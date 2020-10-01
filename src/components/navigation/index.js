import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const NavBar = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Button title="About"></Button>
      <Button title="Projects"></Button>
      <Button title="Contact"></Button>
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  container: {},
});

export default NavBar;
