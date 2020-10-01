import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { projectList } from "../constants";
import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    <>
      <Text>
        {projectList.map((project) => {
          return (
            <SingleProject
              id={project.id}
              name={project.name}
              stack={project.stack}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </Text>
    </>
  );
}
