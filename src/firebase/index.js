import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwSzUvZbIsksmxLTWLGyWb7hJjbDVsdV0",
  authDomain: "vuetodolist-e2bfc.firebaseapp.com",
  projectId: "vuetodolist-e2bfc",
  storageBucket: "vuetodolist-e2bfc.appspot.com",
  messagingSenderId: "430478362226",
  appId: "1:430478362226:web:09226ea55d4444a893e4eb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}