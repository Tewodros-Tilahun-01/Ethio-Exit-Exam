import { StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import React from "react";
import ProfilePicture from "../component/ProfilePicture";

export default function Profile() {
  return (
    <View>
      <View style={styles.profileContainer}>
       <ProfilePicture/>
        
        <TouchableOpacity onPress={() => alert("EditAccount")}>
        
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  

});
