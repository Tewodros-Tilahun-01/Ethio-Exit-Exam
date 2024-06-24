import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStack from "./ProfileStack";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Text, Button, View } from "react-native";

const Tab = createBottomTabNavigator();
const option = {
  headerStyle: { backgroundColor: "#eee7db" },
  headerTintColor: "#000",
};

function BottomNavigation() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#eee7db" />
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
            name="Settings"
            component={ProfileStack}
            options={option}
          />
          <Tab.Screen
            name="something"
            component={ProfileStack}
            options={option}
          />
          <Tab.Screen
            name="Setting"
            component={ProfileStack}
            options={{ header: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default BottomNavigation;
