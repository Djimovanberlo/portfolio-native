import React, { useState } from "react";
import {
  TouchableOpacity,
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import LinkedIn from "../img/icons/LinkedIn.png";

export default function SingleProject(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      {props.github ? (
        <TouchableOpacity onPress={() => window.open(props.github)}>
          <Image
            style={{ resizeMode: "cover", width: 35, height: 35 }}
            source={require(`../img/icons/Github.png`)}
          />
        </TouchableOpacity>
      ) : null}
      <View style={{ flex: 1, flexDirection: "row" }}>
        {props.stack.map((tech, index) => {
          return tech ? (
            <Image
              style={{ resizeMode: "cover", width: 35, height: 35 }}
              source={require(`../img/icons/${tech}.png`)}
              key={index}
            />
          ) : null;
        })}
      </View>
      <Text>{props.description ? props.description : null}</Text>
      {props.link ? (
        <TouchableOpacity onPress={() => window.open(props.link)}>
          <Text>Link to project</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: 25,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    width: 350,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
});
