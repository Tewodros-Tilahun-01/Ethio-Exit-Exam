import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ChooseCard from "./ChooseCard";

const QuestionComponent = ({ question, answer, op }) => {
  const [Select, setSelect] = useState(null);
  const [show, setShow] = useState(false);
  const [qAnswer, setQAnswer] = useState(answer);
  useEffect(() => {
    if ((answer = "A")) {
      setQAnswer(1);
    } else if ((answer = "B")) {
      setQAnswer(2);
    } else if ((answer = "C")) {
      setQAnswer(3);
    } else if ((answer = "D")) {
      setQAnswer(4);
    }
  }, []);
  function showAnswer() {
    setShow(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionNumber}>1 </Text>
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
            setSelect={setSelect}
            index={index}
            answer={qAnswer}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          showAnswer();
        }}
      >
        <Text style={styles.nextButtonText}>show answer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  questionNumber: {
    color: "#fff",
    fontSize: 16,
  },

  questionContainer: {
    backgroundColor: "#2a2e3f",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
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
