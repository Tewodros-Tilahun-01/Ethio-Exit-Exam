// components/Card.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const YearList = ({ title, navigation, questionList }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("QuestionScreen", {
          questionList: questionList,
        })
      }
    >
      <View style={styles.YearList}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            "A beautiful landscape with mountains and a river."
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  YearList: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 5,
    overflow: "hidden",
    paddingVertical: 10,
    marginTop: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
});

export default YearList;
