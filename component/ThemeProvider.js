import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
async function getTheme() {
  const jsonValue = await AsyncStorage.getItem("theme-key");
  return jsonValue != null ? jsonValue : "lightTheme";
}

async function setItem(value) {
  await AsyncStorage.setItem("theme-key", value);
}

const lightTheme = {
  name: "lightTheme",
  backgroundColor1: "#5A639C",
  backgroundColor2: "#ffffff",
  backgroundColor3: "#ffffff",
  backgroundColor4: "#f1eeeb",
  backgroundColor5: "#EDEAFF",
  backgroundColor6: "#fff",

  textColor: "#000000",
  buttonColor: "#1E90FF",
  buttonTextColor: "#ffffff",
};

const darkTheme = {
  name: "darkTheme",

  backgroundColor1: "#1F1B24",
  backgroundColor2: "#D3D9D4",
  backgroundColor3: "#1F1B24",
  backgroundColor4: "#121212",
  backgroundColor5: "#EDEAFF",
  backgroundColor6: "#121212",

  textColor: "#ffffff",
  buttonColor: "#1E90FF",
  buttonTextColor: "#000000",
};
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  async function getThemeFromStorage() {
    let val = await getTheme();
    setTheme(val == "lightTheme" ? lightTheme : darkTheme);
  }
  getThemeFromStorage();

  const [theme, setTheme] = useState(0);

  const toggleTheme = () => {
    setItem(theme.name === "lightTheme" ? "darkTheme" : "lightTheme");
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
