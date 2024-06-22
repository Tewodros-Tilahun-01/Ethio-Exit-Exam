import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
function ChooseCard({ item, Select, show, setSelect, index, answer }) {
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
        setSelect(index);
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
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  questionNumber: {
    color: "#fff",
    fontSize: 16,
  },
  timer: {
    alignItems: "center",
    marginBottom: 20,
  },
  timerText: {
    color: "#fff",
    fontSize: 24,
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 20,
    width: 50,
    textAlign: "center",
  },
  questionContainer: {
    backgroundColor: "#2a2e3f",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
  incorrectCircle: {
    backgroundColor: "#ff0000",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
});
