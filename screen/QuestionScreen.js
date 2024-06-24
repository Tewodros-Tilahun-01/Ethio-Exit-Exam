import React, { useState } from "react";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";

import QuestionComponent from "../component/QuestionComponent";
import { Alert, Button, ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function QuestionScreen({ route, navigation }) {
  const { questionList } = route.params;
  let result = { count: 0, right: 0, wrong: 0 };
  function updateResult(isCorrect) {
    let newResult = {};
    if (isCorrect) {
      newResult = {
        ...result,
        count: result.count + 1,
        right: result.right + 1,
      };
    } else {
      newResult = {
        ...result,
        count: result.count + 1,
        wrong: result.wrong + 1,
      };
    }
    result = newResult;
  }
  function showResult() {
    Alert.alert(
      `total: ${result.count} right: ${result.right} wrong: ${result.wrong}`
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <MasonryFlashList
          data={questionList}
          renderItem={({ item, index }) => (
            <QuestionComponent
              updateResult={updateResult}
              questionNumber={index}
              question={item.question}
              op={[item.op1, item.op2, item.op3, item.op4]}
              answer={item.answer}
            />
          )}
          estimatedItemSize={200}
        ></MasonryFlashList>
        <Button
          title="show result"
          onPress={() => {
            navigation.navigate("ScoreScreen");
          }}
        />
      </View>
    </ScrollView>
  );
}
export default QuestionScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});
