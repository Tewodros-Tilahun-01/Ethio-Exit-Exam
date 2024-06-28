import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";
const Card = ({ name, navigation, questionCollectionList, courses }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("YearListScreen", {
          name: name,
          questionCollectionList: questionCollectionList,
          courses: courses,
        });
      }}
    >
      <View style={[styles.button]}>
        <View>
          <Image source={require("../assets/favicon.png")} />
        </View>
        <View>
          <Text>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: 155,
    height: 155,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 16,
    elevation: 4,
  },
});
export default Card;
