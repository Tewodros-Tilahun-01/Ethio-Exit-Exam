//
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert } from 'react-native';

const TermsAndConditionsScreen = ({ navigation }) => {

  const handleAgree = () => {
    Alert.alert("Agreed", "You have agreed to the terms and conditions.");
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Terms and Conditions</Text>
        <Text style={styles.text}>
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
        </Text>
      </ScrollView>
      <Button title="Agree" onPress={handleAgree} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default TermsAndConditionsScreen;
