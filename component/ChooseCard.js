import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";
function ChooseCard({ item, Select, show, onselect, index, answer }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        { backgroundColor: theme.backgroundColor4 },
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
      <View
        style={[styles.optionCircle, { borderColor: theme.backgroundColor1 }]}
      >
        <View
          style={[
            styles.selectedCircle,
            Select == index ? styles.selectedCircleColor : null,
          ]}
        ></View>
      </View>
      <Text style={[styles.optionText, { color: theme.textColor }]}>
        {item}
      </Text>
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
    backgroundColor: "blue",
  },

  optionText: {
    color: "#000",
    fontSize: 16,
  },
});
