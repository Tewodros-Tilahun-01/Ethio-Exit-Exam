import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
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
          <Image
            source={{ uri: "https://i.imgur.com/dxjd7FB.png" }} // Placeholder image URL
            style={styles.image}
          />
        </View>
        <Text style={styles.scoreTitle}>Your Score</Text>
        <Text style={styles.score}>
          {right}/{count}
        </Text>
        <Text style={styles.congratulations}>Congratulations!</Text>
        <Text style={styles.message}>Great job, You have done well</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to question</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
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
    color: "#0A00FF",
    fontWeight: "bold",
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    color: "#7D7D7D",
    textAlign: "center",
    marginVertical: 10,
  },
  pointsContainer: {
    backgroundColor: "#F0F0FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  pointsText: {
    fontSize: 18,
    color: "#7D7D7D",
  },
  button: {
    backgroundColor: "#0A00FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
