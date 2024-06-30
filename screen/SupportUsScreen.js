import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const SupportUsSceen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support Us</Text>
      <Text style={styles.description}>Your support helps us to keep going and growing. Choose a platform below to make a donation:</Text>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.buymeacoffee.com/yourusername')}>
        <Text style={styles.buttonText}>Buy Me a Coffee</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://fundrazr.com/yourcampaign')}>
        <Text style={styles.buttonText}>FundRazr</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.gofundme.com/f/yourcampaign')}>
        <Text style={styles.buttonText}>GoFundMe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.paypal.com/paypalme/yourusername')}>
        <Text style={styles.buttonText}>PayPal Fundraisers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://ko-fi.com/yourusername')}>
        <Text style={styles.buttonText}>Ko-fi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SupportUsSceen;

