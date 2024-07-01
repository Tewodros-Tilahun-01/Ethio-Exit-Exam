import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TopSection = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 16 }}>
        Success is not final, failure is not fatal, it is the courage to
        continue that counts
      </Text>
      <Image source={require("../assets/by.png")} style={styles.image} />
      <View style={{ alignItems: "flex-start", marginTop: 10 }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 100,
    justifyContent: "center",
    position: "relative",
  },

  image: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 1000,
    width: 100,
    height: 200,
  },
});
export default TopSection;
