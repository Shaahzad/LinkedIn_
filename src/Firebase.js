import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvz5_1aVxe--n2IS1KeLqv9bDdzb5Ymm0",
    authDomain: "linkedin-clone-bb293.firebaseapp.com",
    projectId: "linkedin-clone-bb293",
    storageBucket: "linkedin-clone-bb293.appspot.com",
    messagingSenderId: "1084663999000",
    appId: "1:1084663999000:web:373bdee6bf3199ee0e716d"
  };


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app);


  export {auth,db}



