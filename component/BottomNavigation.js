import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screen/SettingsScreen";
import HomeStack from "./HomeStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

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
                        component={SettingsScreen}
                        options={option}
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
