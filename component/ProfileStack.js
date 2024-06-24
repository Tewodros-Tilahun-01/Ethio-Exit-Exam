
import React from "react";
import SettingsScreen from "../screen/SettingsScreen";
import Profile from "../screen/Profile";
import ChangePasswordScreen from "../screen/ChangePasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screen/NotificationScreen";
import SupportUsScreen from "../screen/SupportUsScreen";
import HelpScreen from "../screen/HelpScreen";
import ContactUsScreen from "../screen/ContactUsScreen";
import TermsAndConditionsScreen from "../screen/TermsAndConditionsScreen";
import ThemeScreen from "../screen/ThemeScreen";

import LogoutScreen from "../screen/LogoutScreen";
const Stack = createNativeStackNavigator();
export default function ProfileStack() {
 
  return (
   
    
        <Stack.Navigator initialRouteName="SettingsScreen" >
          <Stack.Screen name="Settings" component={SettingsScreen}      options={{
        
        headerStyle: { backgroundColor: "#eee7db" },
        headerTintColor: "#000",
        title: "Settings",
        
        }}  />
          <Stack.Screen name="Profile" component={Profile}     options={{
           headerStyle: { backgroundColor: "#eee7db" },
           headerTintColor: "#000",
           title: "Profile",
           
        }} />
         <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ 
           headerStyle: { backgroundColor: "#eee7db" },
           headerTintColor: "#000",
          title: 'Change Password' }} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ 
                         headerStyle: { backgroundColor: "#eee7db" },
                         headerTintColor: "#000",
              title: 'Notifications' }} />
              <Stack.Screen name="SupportUsScreen" component={SupportUsScreen} options={{ 
                  headerStyle: { backgroundColor: "#eee7db" },
                  headerTintColor: "#000",title: 'Support Us' }} />
              <Stack.Screen name="HelpScreen" component={HelpScreen} options={{
                 title: 'Help & Support', 
                 headerStyle: { backgroundColor: "#eee7db" },
                 headerTintColor: "#000"}} />
                  <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{
                    headerStyle: { backgroundColor: "#eee7db" },
                    headerTintColor: "#000", title: 'Contact Us' 
                    
                  }}
                   />
                   <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} options={{  headerStyle: { backgroundColor: "#eee7db" },
                  headerTintColor: "#000",title: 'Terms and Conditions' }} />
                   <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ title: 'Logout' }} />
                   {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} /> */}

          <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{ headerStyle: { backgroundColor: "#eee7db" },
                  headerTintColor: "#000",title: 'Select Theme' }} />
        </Stack.Navigator>
        
        
 
   
  );
}
