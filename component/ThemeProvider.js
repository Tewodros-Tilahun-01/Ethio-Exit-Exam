import React, { createContext, useState } from "react";
import { useColorScheme } from "react-native";

const lightTheme = {
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
  backgroundColor1: "#323232",
  backgroundColor2: "#222931",
  backgroundColor3: "#323232",
  backgroundColor4: "#212121",
  backgroundColor5: "#323232",
  backgroundColor6: "#EDEAFF",

  textColor: "#ffffff",
  buttonColor: "#1E90FF",
  buttonTextColor: "#000000",
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const defaultTheme = colorScheme !== "dark" ? lightTheme : darkTheme;

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
