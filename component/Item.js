import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";
const Item = ({ Items, actions, title }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigation = useNavigation();
  return (
    <View>
      <Text style={[styles.title, { color: theme.textColor }]}>{title}</Text>
      {Items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() =>
            item.title == "Theme"
              ? toggleTheme()
              : actions(item.component, { ItemId: Math.random().toString() })
          }
        >
          <Text style={styles.optionIcon}>{item.icon}</Text>
          <Text style={[styles.optionTitle, { color: theme.textColor }]}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            {item.title == "Theme" && (
              <Switch
                trackColor={{ true: "#fff", false: "#000" }}
                thumbColor={
                  theme.backgroundColor1 !== "#5A639C" ? "#fff" : "#000"
                }
                value={theme.backgroundColor1 !== "#5A639C"}
                onValueChange={toggleTheme}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.3 }] }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#EDEDED",
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  optionTitle: {
    fontSize: 16,
  },
});
