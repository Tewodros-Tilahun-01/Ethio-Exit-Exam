import db from "./firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default async function readData() {
  try {
    const docRef = collection(db, "questionCollection");
    const querySnapshot = await getDocs(docRef);
    const list = [];

    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    console.log("data readd");
    return list;
  } catch {
    console.log("something went wrong");
  }
}
