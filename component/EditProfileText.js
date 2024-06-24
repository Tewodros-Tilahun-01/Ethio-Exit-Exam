import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfileText = () => {
  return (
    <View>
   <Text style={styles.editAccount}>Edit Profile</Text>
    </View>
  )
}

export default EditProfileText

const styles = StyleSheet.create({
     editAccount: {
          color: "#4A90E2",
          fontSize: 16,
        },
})