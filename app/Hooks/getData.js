import {getFirestore,collection, doc,getDoc } from "firebase/firestore";
import app from "@/firebase.config";

const db = getFirestore(app);

const isValidEmail = (email) => {
  const domain = "vitstudent.ac.in";
  return email.endsWith(`@${domain}`);
};
const getData = async (email) => {
    if (isValidEmail(email)){
        const userDocRef = doc(collection(db, "users"), email);
        const userSnapshot = await getDoc(userDocRef);
        const storedUser = userSnapshot.data();
        return  storedUser;
    }
    else{
        throw new error ("Invalid Email");
    }
};
export default getData;
