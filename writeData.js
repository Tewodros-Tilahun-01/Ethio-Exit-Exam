import db from "./firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
async function writeData() {
  const docRef = doc(db, "questionCollection", "is");
  const colRef = await setDoc(docRef, {
    dept: "is",
    courses: "opration system , networking ,Ip1 , Ip2 , algorithm",

    questionCollectionList: [
      {
        year: 2015,
        questionList: [
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
        ],
      },
      {
        year: 2016,
        questionList: [
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
          {
            question: "What is the most popular sport throughout the world?",
            op1: "Volleyball",
            op2: "Football",
            op3: "Badminton",
            op4: "Badminton",
            answer: "A",
          },
        ],
      },
    ],
  });
  console.log("write");
}
export default writeData;
