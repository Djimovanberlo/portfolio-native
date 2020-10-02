import React, { useState } from "react";
import {
  TouchableOpacity,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";

import LinkedIn from "../img/icons/LinkedIn.png";

export default function SingleProject(props) {
  const iconGenerator = (iconString, index, name) => {
    console.log(name, iconString, "generated!");
    console.log(require(`../img/icons/${iconString}.png`));
    return (
      <Image
        style={{ resizeMode: "cover", width: 35, height: 35 }}
        source={require(`../img/icons/${iconString}.png`)}
        key={index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      <View style={{ flex: 1, flexDirection: "column" }}>
        {props.stack.map((tech, index) => {
          iconGenerator(tech, index, props.name);
        })}
      </View>
      <Text>{props.description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
        <Text>Link to project</Text>
      </TouchableOpacity>
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
