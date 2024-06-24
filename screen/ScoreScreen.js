import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const ScoreScreen = () => {
  return (
    <View>
      <View style={styles.scoreboard}>
        <Text style={styles.scoreText}>Total Questions: {0}</Text>
        <Text style={styles.scoreText}>Correct Answers: {0}</Text>
        <Text style={styles.scoreText}>Wrong Answers: {0}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Correct Answer" />
        <Button title="Wrong Answer" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  scoreboard: {
    marginBottom: 50,
  },
  scoreText: {
    fontSize: 20,
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default ScoreScreen;
