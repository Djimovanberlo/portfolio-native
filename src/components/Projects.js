import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Container,
} from "react-native";

import { projectList } from "../constants";
import Constants from "expo-constants";

import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    // <Container>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {projectList.map((project) => {
          return (
            <SingleProject
              key={project.id}
              name={project.name}
              stack={project.stack}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
    // </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
