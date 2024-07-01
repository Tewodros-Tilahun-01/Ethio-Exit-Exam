import React, { useEffect } from "react";
import writeData from "./writeData";

import ThemeProvider from "./component/ThemeProvider";

import BottomNavigation from "./component/BottomNavigation";

export default function App() {
  useEffect(() => {
    // writeData();
  }, []);
  return (
    <ThemeProvider>
      <BottomNavigation />
    </ThemeProvider>
  );
}
