import {
  StyleSheet,
  Text,
  View,
  
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Item = ({ Items,  actions ,title }) => {

  const navigation = useNavigation();
  // console.log(Items);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {Items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() =>  actions(item.component,{ItemId:Math.random().toString()})}
        >
          <Text style={styles.optionIcon}>{item.icon}</Text>
          <Text style={styles.optionTitle}>{item.title}</Text>
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
  title:{
fontSize:30,
fontWeight:"bold"
  }
,
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 4,
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
