import React from "react";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";

import QuestionComponent from "../component/QuestionComponent";
import { ScrollView, StyleSheet, View } from "react-native";

function QuestionScreen({ route }) {
  const questionList = route.params.questionList;
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlashList
          data={questionList}
          renderItem={({ item }) => (
            <QuestionComponent
              question={item.question}
              op={[item.op1, item.op2, item.op3, item.op4]}
              answer={item.answer}
            />
          )}
          estimatedItemSize={200}
          keyExtractor={(item) => {
            return item.question;
          }}
        ></FlashList>
      </ScrollView>
    </View>
  );
}
export default QuestionScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#000",
  },
});
