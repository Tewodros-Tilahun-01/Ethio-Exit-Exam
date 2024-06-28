import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";
export default function ScoreScreen({ navigation, route }) {
  const { count, right } = route.params;
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor5 }]}
    >
      <View style={[styles.card, { backgroundColor: theme.backgroundColor6 }]}>
        <View style={styles.imageContainer}>
          {right >= count / 2 ? (
            <Image
              source={require("../assets/congra.jpg")} // Placeholder image URL
              style={styles.image}
            />
          ) : (
            <Image
              source={require("../assets/try.jpg")} // Placeholder image URL
              style={styles.image}
            />
          )}
        </View>
        <Text style={styles.scoreTitle}>Your Score</Text>
        <Text style={styles.score}>
          {right}/{count}
        </Text>
        {right >= count / 2 ? (
          <Text style={styles.congratulations}>Congratulations!</Text>
        ) : (
          <Text style={styles.try}>Try again</Text>
        )}
        <Text style={styles.message}>Great job, You have done well</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to question</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  scoreTitle: {
    fontSize: 18,
    color: "#7D7D7D",
  },
  score: {
    fontSize: 36,
    color: "#3D3D3D",
    fontWeight: "bold",
    marginVertical: 10,
  },
  congratulations: {
    fontSize: 24,
    color: "#008000",
    fontWeight: "bold",
    marginVertical: 10,
  },
  try: {
    fontSize: 24,
    color: "#ff0000",
    fontWeight: "bold",
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    color: "#7D7D7D",
    textAlign: "center",
    marginVertical: 10,
  },

  pointsText: {
    fontSize: 18,
    color: "#7D7D7D",
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    flex: 1,
    backgroundColor: "#0A00FF",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
});
