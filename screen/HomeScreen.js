import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopSection from "../component/TopSection";
import MainSection from "../component/MainSection";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const HomeScreen = ({ navigation }) => {
  const [fullView, setFullView] = useState(1);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const fullscreenChange = () => {
    setFullView((prv) => (prv === 1 ? 0 : 1));
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor1 }]}
    >
      <View style={{ flex: fullView }}>{fullView === 1 && <TopSection />}</View>

      <View
        style={[
          styles.mainSection,
          {
            borderTopLeftRadius: fullView ? 50 : 0,
            backgroundColor: theme.backgroundColor2,
          },
        ]}
      >
        <MainSection
          fullscreenChange={fullscreenChange}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A639C",
  },
  mainSection: {
    flex: 2,
    backgroundColor: "#fff",
  },
});
export default HomeScreen;
