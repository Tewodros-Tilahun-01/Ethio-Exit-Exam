import { View, Text, ScrollView,Image } from "react-native";
import React, { Component } from "react";
import Item from "../component/Item";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../component/ProfilePicture";
import EditProfileText from "../component/EditProfileText";




const acountItem = [
  { title: <EditProfileText/>,icon:<ProfilePicture/>,component:"Profile"},
  { title: "Change Password", icon: "🔐",component:"ChangePasswordScreen"},
  { title: "Notifications", icon: "🔔",component:"NotificationScreen" },
  { title: "Support Us ", icon: "💸" ,component:"SupportUsScreen" },
];

const InformationItem = [
  { title: "Help", icon: "🛠️", component:"HelpScreen"  },
 
  { title: "Contact us", icon: "📞",component:"ContactUsScreen" },
  { title: "Terms & Conditions", icon: "📄",component:"TermsAndConditionsScreen"},
];

const Actions = [
  { title: "Theme", icon: "🎨",component: "ThemeScreen "},
  { title: "Logout", icon: "🚪",component: "LogoutScreen"}
];

export default function SettingsScreen() {
  const navigation = useNavigation();

  const actions = (Action,{ItemId}) => {
    navigation.navigate(Action);
  };
  return (
    <ScrollView>
      <Item Items={acountItem} actions={actions} title={"Acount"} />
      <Item Items={InformationItem} actions={actions} title={"Info"} />
      <Item Items={Actions} actions={actions} title={"Action"} />
    </ScrollView>
  );
}
