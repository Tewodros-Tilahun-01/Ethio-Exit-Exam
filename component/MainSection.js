import React, { useEffect, useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import Card from "./Card";

import datamodel from "../datamodel";
import readData from "../readData";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const MainSection = ({ fullscreenChange, navigation }) => {
  const [firebasemodal, setFirebaseModal] = useState(null);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const mm = async () => {
      res = await readData();
      setFirebaseModal(res);
    };
    mm();
  }, []);
  console.log(firebasemodal);
  let modal = firebasemodal || datamodel;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: theme.textColor }}>explore quizzes</Text>
        <TouchableOpacity onPress={fullscreenChange}>
          <Text style={styles.button}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {!modal && (
          <Text
            style={{
              position: "absolute",
              bottom: 100,
              right: 100,
              left: 100,
              backgroundColor: "red",
              zIndex: 100,
              padding: 10,
              borderRadius: 10,
              borderWidth: 0.3,
              textAlign: "center",
              color: "#fff",
            }}
          >
            no internet
          </Text>
        )}

        <MasonryFlashList
          data={modal}
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              name={item.dept}
              courses={item.courses}
              questionCollectionList={item.questionCollectionList}
              navigation={navigation}
            ></Card>
          )}
          estimatedItemSize={200}
        ></MasonryFlashList>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    height: "87%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
  },
  listContainer: {
    width: "100%",
    height: "100%",

    paddingTop: 10,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: "#00bfff",
    padding: 5,
    borderRadius: 5,
  },
});
export default MainSection;
