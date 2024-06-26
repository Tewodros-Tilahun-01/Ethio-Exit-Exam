import React, { createContext, useState } from "react";
import { useColorScheme } from "react-native";

const lightTheme = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
  buttonColor: "#1E90FF",
  buttonTextColor: "#ffffff",
};

const darkTheme = {
  backgroundColor: "#000000",
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
