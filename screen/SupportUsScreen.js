import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';

const SupportUsScreen = () => {

  const handleContactUs = () => {
    
    Alert.alert("Contact Us", "You can contact us at support@example.com");
  };

  const handleFollowUs = (platform) => {
    
    let url;
    switch(platform) {
      case 'facebook':
        url = 'https://www.facebook.com/yourpage';
        break;
      case 'twitter':
        url = 'https://www.twitter.com/yourprofile';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/yourprofile';
        break;
      default:
        return;
    }
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const handleDonate = () => {
   
    Linking.openURL('https://www.yourdonationpage.com').catch(err => console.error("Couldn't load page", err));
  };

  return (
     <View style={styles.container}>
       <Text style={styles.title}>Support Us</Text>
       <Text style={styles.description}>
         Thank you for using our app! You can support us in the following ways:
       </Text>
       <Button
         title="Donate"
         onPress={() => handleLinkPress('https://www.example.com/donate')}
       />
       <Button
         title="Follow us on Twitter"
         onPress={() => handleLinkPress('https://twitter.com/example')}
       />
       <Button
         title="Like us on Facebook"
         onPress={() => handleLinkPress('https://facebook.com/example')}
       />
       <Button
         title="Contact Us"
         onPress={() => handleLinkPress('mailto:support@example.com')}
       />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 16,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
   },
   title: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 16,
   },
   description: {
     fontSize: 16,
     textAlign: 'center',
     marginBottom: 20,
   },
   button: {
     marginVertical: 10,
   },
 });
 
 export default SupportUsScreen;