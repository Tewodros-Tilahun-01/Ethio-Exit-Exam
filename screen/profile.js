import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL
        />
        <Text style={styles.profileName}>Jenny Wilson</Text>
        <TouchableOpacity onPress={() => handleNavigation('EditAccount')}>
          <Text style={styles.editAccount}>Edit Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
     profileContainer: {
          alignItems: 'center',
          marginVertical: 20,
        },
        profileImage: {
          width: 80,
          height: 80,
          borderRadius: 40,
        },
        profileName: {
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 10,
        },
        editAccount: {
          color: '#4A90E2',
          fontSize: 16,
        },
})