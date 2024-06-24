

import { StyleSheet, Image,View,Text } from 'react-native'
import React from 'react'

const ProfilePicture = () => {
  return (
    <View>
         <Image
          style={styles.profileImage}
          source={require("../assets/image.png")} 
        />
        <Text style={styles.profileName}>Yohannes Maye</Text>
        
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
     profileImage: {
          width: 100,
          height: 80,
          borderRadius: 40,
        },
        profileName: {
          fontSize: 18,
          fontWeight: "bold",
          marginVertical: 10,
        },
       
})