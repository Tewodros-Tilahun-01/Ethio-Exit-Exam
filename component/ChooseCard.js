import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
function ChooseCard({ item, Select, show, onselect, index, answer }) {
  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        show &&
          Select == index &&
          (answer == index
            ? styles.correctOptionButton
            : styles.incorrectOptionButton),
        show && (answer == index ? styles.correctOptionButton : null),
      ]}
      onPress={() => {
        onselect(index);
      }}
    >
      <View style={styles.optionCircle}>
        <View
          style={[
            styles.selectedCircle,
            Select == index ? styles.selectedCircleColor : null,
          ]}
        ></View>
      </View>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );
}
export default ChooseCard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1eeeb",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  correctOptionButton: {
    borderColor: "#00ff00",
    borderWidth: 2,
  },
  incorrectOptionButton: {
    borderColor: "#ff0000",
    borderWidth: 2,
  },
  optionCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  selectedCircleColor: {
    backgroundColor: "#000",
  },

  optionText: {
    color: "#000",
    fontSize: 16,
  },
});
