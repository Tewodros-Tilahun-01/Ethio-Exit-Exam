import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
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
    width: 160,
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 16,
    elevation: 4,
  },
});
export default Card;
