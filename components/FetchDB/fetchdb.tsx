import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";


export const getPoints = async (user: any) => {

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const numTokens = Number(docSnap.data().numTokens);
        return numTokens;
    }
    return 20;
}

export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });

}