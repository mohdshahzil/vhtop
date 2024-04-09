import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "@/firebase.config";

const db = getFirestore(app);


const storeNightMessData = async (RegNo, price, items, paid, quantity) => {
  try {
    const docRef = doc(collection(db, "nightmess"), RegNo);
    const data = {
      regNo:RegNo,
      quantity: quantity,
      Price: price,
      Items: items,
      paid: paid,
    };
    await setDoc(docRef, data);
    console.log("Night Mess data stored successfully!");
  } catch (error) {
    console.error("Error storing Night Mess data:", error);
    throw error;
  }
};

export default storeNightMessData;
