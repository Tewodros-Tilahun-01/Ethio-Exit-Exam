

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();

//   const handleLogout = async () => {
   
//     await AsyncStorage.clear();
//     Alert.alert('Logged Out', 'You have been successfully logged out.');
//     navigation.replace('Login'); 
//   };
  
  const handleLogout = () => {

     Alert.alert('Logged Out', 'You have been successfully logged out.');
     navigation.replace('Login'); 
   };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});

export default LogoutScreen;
