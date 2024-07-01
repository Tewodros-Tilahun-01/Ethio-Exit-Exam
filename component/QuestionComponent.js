import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ChooseCard from "./ChooseCard";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const QuestionComponent = ({
  question,
  answer,
  op,
  questionNumber,
  updateResult,
}) => {
  const [Select, setSelect] = useState(null);

  const [show, setShow] = useState(false);
  const [qAnswer, setQAnswer] = useState(answer);

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (answer == "A") {
      setQAnswer(0);
    } else if (answer == "B") {
      setQAnswer(1);
    } else if (answer == "C") {
      setQAnswer(2);
    } else if (answer == "D") {
      setQAnswer(3);
    }
  }, []);

  function showAnswer() {
    !show && setShow(true);
    !show && updateResult(Select == qAnswer);
  }
  function onselect(index) {
    !show && setSelect(index);
  }
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor3 }]}
    >
      <View style={styles.header}>
        <View style={styles.questionNumberContainer}>
          <Text style={styles.questionNumber}>{questionNumber + 1}</Text>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View>
        {op.map((item, index) => (
          <ChooseCard
            key={index}
            item={item}
            show={show}
            Select={Select}
            onselect={onselect}
            index={index}
            answer={qAnswer}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={showAnswer}>
        <Text style={styles.nextButtonText}>show answer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 50,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 20,
  },

  questionNumberContainer: {
    backgroundColor: "#000",

    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#00bfff",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -47,
  },
  questionNumber: { color: "#fff", fontSize: 28 },
  questionContainer: {
    backgroundColor: "#455e50",
    paddingVertical: 37,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    zIndex: -1,
  },
  questionText: {
    color: "#fff",
    fontSize: 18,
  },

  nextButton: {
    backgroundColor: "#00bfff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QuestionComponent;
