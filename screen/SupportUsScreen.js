import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

const SupportUsScreen = () => {
  const handleContactUs = () => {
    Alert.alert("Contact Us", "You can contact us at support@example.com");
  };

  const handleFollowUs = (platform) => {
    let url;
    let emoji;
    switch (platform) {
      case "facebook":
        url = "https://www.facebook.com/yourpage";
        emoji = "👍";
        break;
      case "twitter":
        url = "https://www.twitter.com/yourprofile";
        emoji = "🐦";
        break;
      case "instagram":
        url = "https://www.instagram.com/yourprofile";
        emoji = "📸";
        break;
      default:
        return;
    }
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
    return emoji;
  };

  const handleDonate = () => {
    Linking.openURL("https://www.yourdonationpage.com").catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support Us</Text>
      <Text style={styles.description}>
        Thank you for using our app! You can support us in the following ways:
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>💰 Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleFollowUs("twitter")}
      >
        <Text style={styles.buttonText}>🐦 Follow us on Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleFollowUs("facebook")}
      >
        <Text style={styles.buttonText}>👍 Like us on Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContactUs}>
        <Text style={styles.buttonText}>✉️ Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SupportUsScreen;
