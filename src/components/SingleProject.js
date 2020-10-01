import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SingleProject(props) {
  return (
    <>
      <Text>{props.name}</Text>
      <Text>
        {props.stack.map((tech) => {
          return <Text>{tech}</Text>;
        })}
      </Text>
      <Text>{props.description}</Text>
      <Text>{props.link}</Text>
    </>
  );
}
