import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const Card = ({ name, navigation, questionCollectionList, courses }) => {
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
      <View style={styles.button}>
        <View>
          <Image source={require(`../assets/book.png`)} />
        </View>
        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text style={{ color: "#000", fontSize: 14 }}>{name}</Text>
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
    paddingTop: 20,
  },
});
export default Card;
