import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import app from "@/firebase.config";

const db = getFirestore(app);

const retrieveXeroxRequests = async () => {
  try {
    const requests= [];
    const querySnapshot = await getDocs(collection(db, "photocopy"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      requests.push({
        regNumber: data.regNumber,
        location: data.location,
        collected: data.collected,
      });
    });
    return requests;
  } catch (error) {
    console.error("Error retrieving Xerox requests:", error);
    throw new Error("Failed to retrieve Xerox requests. Please try again later.");
  }
};

export default retrieveXeroxRequests;
