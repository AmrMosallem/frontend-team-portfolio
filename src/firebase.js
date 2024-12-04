// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3SkR1GwqcjLvjg3b9pUXVKjzbbqibS6k",
  authDomain: "pixelists-portfolio.firebaseapp.com",
  projectId: "pixelists-portfolio",
  storageBucket: "pixelists-portfolio.firebasestorage.app",
  messagingSenderId: "305839784628",
  appId: "1:305839784628:web:28e3dd28e7409374134de1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messagesCollection = collection(db, "messages");
export { messagesCollection };
