import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      test1
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
