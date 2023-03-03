import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5ViOO33b5v2_a2no7S00oGHh-5bSOODk",
  authDomain: "entrega-3-1409d.firebaseapp.com",
  projectId: "entrega-3-1409d",
  storageBucket: "entrega-3-1409d.appspot.com",
  messagingSenderId: "469451071864",
  appId: "1:469451071864:web:3ef83c9d518acb5262688d",
  measurementId: "G-EK3GDQ10SM"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
