import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import Card from "./Card";

import datamodel from "../datamodel";
import readData from "../readData";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const MainSection = ({ fullscreenChange, navigation }) => {
  const [firebasemodal, setFirebaseModal] = useState(null);
  const [isError, setError] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const mm = async () => {
      try {
        res = await readData();
        setFirebaseModal(res);
      } catch (error) {
        setError(true);
      }
    };
    mm();
  }, []);
  console.log(firebasemodal);
  let modal = firebasemodal;

  // let modal = firebasemodal || datamodel;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: theme.textColor }}>explore quizzes</Text>
        <TouchableOpacity onPress={fullscreenChange}>
          <Text style={styles.button}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>
      {isError && <Text>there is an error</Text>}
      {!modal ? (
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={styles.spinner}
        />
      ) : (
        <>
          <View style={styles.listContainer}>
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
        </>
      )}
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
  spinner: { flex: 1, alignItems: "center", justifyContent: "center" },
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
