import db from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { QUIZ } from "../config/dbVars";

export async function getQuizes() {
    const querySnapshot = await getDocs(collection(db, QUIZ));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}