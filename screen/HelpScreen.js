import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Getting Started</Text>
        <Text style={styles.sectionContent}>
          Welcome to our app! Here’s a quick guide to get you started...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
        <Text style={styles.sectionContent}>
          Learn how to manage your account, update your profile...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <Text style={styles.sectionContent}>
          Here are some frequently asked questions and their answers...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionContent}>
          Need further assistance? Reach out to us at support@example.com...
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HelpScreen;
