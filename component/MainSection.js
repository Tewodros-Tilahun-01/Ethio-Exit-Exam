import React, { useEffect, useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import Card from "./Card";

import datamodel from "../datamodel";
import readData from "../readData";

const MainSection = ({ fullscreenChange, navigation }) => {
  const [firebasemodal, setFirebaseModal] = useState(null);
  useEffect(() => {
    const mm = async () => {
      res = await readData();
      setFirebaseModal(res);
    };
    mm();
  }, []);
  console.log(firebasemodal);
  let modal = firebasemodal;
  return (
    <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>explore quizzes</Text>
        <TouchableOpacity onPress={fullscreenChange}>
          <Text style={styles.button}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {!modal && <Text>no internet</Text>}

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
    height: 100,
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
    backgroundColor: "#fff",
    padding: 4,
  },
});
export default MainSection;
