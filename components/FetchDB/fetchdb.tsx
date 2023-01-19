import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import { app } from '../../utils/firebase';
import { getAuth } from 'firebase/auth';


export const fetchDB = async () => {
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);


    let numTokens: number = 3;

    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            numTokens = Number(docSnap.data().numTokens);
        }
    }
    return numTokens;
}


export const getPoints = async (user: any) => {

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const numTokens = Number(docSnap.data().numTokens);
        return numTokens;
    }
    return -1;
}