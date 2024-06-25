import db from "./firebase";
import data from "./data";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
async function writeData() {
  const docRef = doc(db, "questionCollection", "computerScience");
  const colRef = await setDoc(docRef, data);
  console.log("write");
}
export default writeData;
