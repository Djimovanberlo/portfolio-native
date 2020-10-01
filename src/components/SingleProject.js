import React, { useState } from "react";
import {
  TouchableOpacity,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SingleProject(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      <Text>
        {props.stack.map((tech) => {
          return <Text>{tech}</Text>;
        })}
      </Text>
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
