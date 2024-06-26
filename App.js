import React, { useEffect } from "react";
import BottomNavigation from "./component/BottomNavigation";

import writeData from "./writeData";
import readData from "./readData";
import ThemeProvider from "./component/ThemeProvider";

export default function App() {
  useEffect(() => {
    // writeData();
    // readData();
  }, []);

  return (
    <ThemeProvider>
      <BottomNavigation />
    </ThemeProvider>
  );
}
