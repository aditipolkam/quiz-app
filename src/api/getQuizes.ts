import db from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { QUIZ } from "../config/dbVars";
import { Quiz } from "../types";

export async function getQuizes() {
    const querySnapshot = await getDocs(collection(db, QUIZ));
    let quizes:Quiz[] = [];
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        quizes.push({
            id: doc.id,
            creator: doc.data().creator,
            topic: doc.data().topic,
            questions: doc.data().questions
        });
    });
    
    return quizes;
}