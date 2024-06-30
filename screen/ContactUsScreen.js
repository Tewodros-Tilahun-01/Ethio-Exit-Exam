import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CONTACT US</Text>
      <View style={styles.contactItem}>
        <Icon name="phone" size={20} color="#000" />
        <Text style={styles.contactText} onPress={() => Linking.openURL('tel:+1234567890')}>
          +123-456-7890
        </Text>
      </View>
      <View style={styles.contactItem}>
        <Icon name="globe" size={20} color="#000" />
        <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.reallygreatsite.com')}>
          www.reallygreatsite.com
        </Text>
      </View>
      <View style={styles.contactItem}>
        <Icon name="envelope" size={20} color="#000" />
        <Text style={styles.contactText} onPress={() => Linking.openURL('mailto:hello@reallygreatsite.com')}>
          hello@reallygreatsite.com
        </Text>
      </View>
      <View style={styles.contactItem}>
        <Icon name="map-marker" size={20} color="#000" />
        <Text style={styles.contactText}>
          123 Anywhere St., Any City
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});

export default ContactUsScreen;
