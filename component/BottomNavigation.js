import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.backgroundColor1}
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={styles.tabStyle}>
          <Tab.Screen
            name="Home "
            component={HomeStack}
            options={{
              header: () => null,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../assets/home-button.png")}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={ProfileStack}
            options={{
              header: () => null,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../assets/settings.png")}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default BottomNavigation;

const styles = {
  tabStyle: {
    tabBarActiveTintColor: "#000",
    tabBarActiveBackgroundColor: "#f4f4f4",
    tabBarStyle: {
      height: 60,
      elevation: 4,
      marginHorizontal: "17%",
      paddingHorizontal: 20,
      borderRadius: 30,
      position: "absolute",
      bottom: 14,
      elevation: 5,
    },
    tabBarItemStyle: {
      paddingTop: 3,
      paddingBottom: 5,
      borderRadius: 10,
      marginHorizontal: "10%",
    },
    tabBarLabelStyle: {
      fontSize: 12,
    },
  },
};
