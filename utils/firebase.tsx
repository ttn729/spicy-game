// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw8ezqytN1n5hLa-HTgVWPexWdbAx_5u0",
  authDomain: "spicy-game-ecf2f.firebaseapp.com",
  projectId: "spicy-game-ecf2f",
  storageBucket: "spicy-game-ecf2f.appspot.com",
  messagingSenderId: "57914654669",
  appId: "1:57914654669:web:c4b65b9391339a18b48e84",
  measurementId: "G-H1V4JTXM0X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
  return app;
}