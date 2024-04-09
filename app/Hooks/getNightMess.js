import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/firebase.config";

const db = getFirestore(app);

const getNightMessData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "nightmess"));
    const nightMessData = [];
    querySnapshot.forEach((doc) => {
      nightMessData.push(doc.data());
    });
    return nightMessData;
  } catch (error) {
    console.error("Error getting Night Mess data:", error);
    throw error;
  }
};

export default getNightMessData;
