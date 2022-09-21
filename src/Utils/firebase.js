import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBlTkbm2_Z-Bp8yGe9-S6n539NE2Sk7G6U",
  authDomain: "tiendafotosalbano.firebaseapp.com",
  projectId: "tiendafotosalbano",
  storageBucket: "tiendafotosalbano.appspot.com",
  messagingSenderId: "472891634812",
  appId: "1:472891634812:web:c447b16e38f668faf645f9"
};



const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);