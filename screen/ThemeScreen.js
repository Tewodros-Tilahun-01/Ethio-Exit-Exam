import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../component/ThemeProvider";

const ThemeScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor3 }]}
    >
      <Button
        title="Change Theme"
        onPress={toggleTheme}
        color={theme.buttonColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeScreen;
