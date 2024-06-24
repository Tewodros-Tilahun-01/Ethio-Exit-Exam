import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screen/SettingsScreen";
import HomeStack from "./HomeStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Text, Button, View } from "react-native";

const Tab = createBottomTabNavigator();
const option = {
  headerStyle: { backgroundColor: "#31304d" },
  headerTintColor: "#fff",
};
function BottomNavigation() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#5A639C" />

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              header: () => null,

              title: "Home",
            }}
          />
          <Tab.Screen
            name="something"
            component={SettingsScreen}
            options={option}
          />
          <Tab.Screen
            name="profile"
            component={SettingsScreen}
            options={option}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default BottomNavigation;
