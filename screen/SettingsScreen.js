// import { Text, View ,TouchableOpacity,ScrollView} from "react-native";
// import React from "react";

// function SettingsScreen({ navigation }) {
//   navigationProfile = () => {
//     console.log("Profile");
//   }
//   const acountItem=[
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//   ]
//   const SuportItems=[
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//   ]

//   const   actionItems=[
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//     {icon:"person-outline",text:"Profile",Action:navigationProfile},
//   ]

//   return (
//     <>

// <View>
//   <Text>Acount</Text>
// </View>

//     </>
//   );
// }
// export default SettingsScreen;

import { View, Text, ScrollView } from "react-native";
import React, { Component } from "react";
import Item from "../component/Item";
import { FlashList } from "@shopify/flash-list";
const acountItem = [
  { title: "Change Password", icon: "🔒" },
  { title: "Notifications", icon: "🔔" },
  { title: "Refer Friends & Businesses", icon: "🔗" },
  { title: "Third Party Application", icon: "🔍" },
  { title: "FAQ", icon: "❓" },
  { title: "Contact us", icon: "📞" },
  { title: "Terms & Conditions", icon: "📄" },
  { title: "Logout", icon: "🚪" },
];
const InformationItem = [
  { title: "Change Password", icon: "🔒" },
  { title: "Notifications", icon: "🔔" },
  { title: "Refer Friends & Businesses", icon: "🔗" },
  { title: "Third Party Application", icon: "🔍" },
  { title: "FAQ", icon: "❓" },
  { title: "Contact us", icon: "📞" },
  { title: "Terms & Conditions", icon: "📄" },
  { title: "Logout", icon: "🚪" },
];
export default function SettingsScreen() {
  const handleNavigation = (screen) => {
    // Navigation logic, replace with actual navigation code
    alert(`Navigate to ${screen}`);
  };

  return (
    <ScrollView>
      <Text>Settings</Text>
      <Item Items={acountItem} handleNavigation={handleNavigation} />
      <Item Items={InformationItem} handleNavigation={handleNavigation} />
      
    </ScrollView>
  );
}
