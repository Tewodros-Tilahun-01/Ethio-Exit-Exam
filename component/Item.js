import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Item = ({ Items, handleNavigation }) => {
  const navigation = useNavigation();
  console.log(Items);
  return (
    <View>
      {Items.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => handleNavigation(option.title)}
        >
          <Text style={styles.optionIcon}>{option.icon}</Text>
          <Text style={styles.optionTitle}>{option.title}</Text>
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

  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
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
