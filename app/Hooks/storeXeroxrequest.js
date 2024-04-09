import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "@/firebase.config";

const db = getFirestore(app);

const storeXeroxRequest = async (location, requestData) => {
  try {
    const docRef = doc(collection(db, "photocopy"), location);
    await setDoc(docRef, requestData);
    console.log("Xerox request stored successfully!");
  } catch (error) {
    console.error("Error storing Xerox request:", error);
    throw error;
  }
};

export default storeXeroxRequest;
