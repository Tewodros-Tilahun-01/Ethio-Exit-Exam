import React, { useEffect } from "react";
import writeData from "./writeData";
import readData from "./readData";
import ThemeProvider from "./component/ThemeProvider";

import BottomNavigation from "./component/BottomNavigation";

export default function App() {
  useEffect(() => {
    // writeData();
    // readData();
  }, []);
  // console.log(theme);
  return (
    <ThemeProvider>
      <BottomNavigation />
    </ThemeProvider>
  );
}
