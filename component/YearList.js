// components/Card.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

const YearList = ({ title, navigation, questionList, courses }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("QuestionScreen", {
          questionList: questionList,
        })
      }
    >
      <View style={styles.YearList}>
        <View style={styles.textContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{courses}</Text>
          </View>
          <Text style={styles.icon}>&gt;</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  YearList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 2,
    margin: 7,
    overflow: "hidden",
    paddingVertical: 7,
  },
  icon: {
    fontSize: 30,
    color: "#000",
    flex: 1,
  },
  descriptionContainer: {
    flex: 17,
  },
  textContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
});

export default YearList;
