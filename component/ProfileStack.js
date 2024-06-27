import React from "react";
import SettingsScreen from "../screen/SettingsScreen";

import ChangePasswordScreen from "../screen/ChangePasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screen/NotificationScreen";
import SupportUsScreen from "../screen/SupportUsScreen";
import HelpScreen from "../screen/HelpScreen";
import ContactUsScreen from "../screen/ContactUsScreen";
import TermsAndConditionsScreen from "../screen/TermsAndConditionsScreen";
import ThemeScreen from "../screen/ThemeScreen";

import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Settings",
        }}
      />

      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Change Password",
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Notifications",
        }}
      />
      <Stack.Screen
        name="SupportUsScreen"
        component={SupportUsScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Support Us",
        }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: "Help & Support",
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Contact Us",
        }}
      />
      <Stack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Terms and Conditions",
        }}
      />

      <Stack.Screen
        name="ThemeScreen"
        component={ThemeScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Select Theme",
        }}
      />
    </Stack.Navigator>
  );
}
