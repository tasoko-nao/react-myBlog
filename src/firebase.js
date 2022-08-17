import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSDe_fpR6aJcxn32emmU15Q3Mn3TVHsVo",
  authDomain: "react-myblog-f25b3.firebaseapp.com",
  projectId: "react-myblog-f25b3",
  storageBucket: "react-myblog-f25b3.appspot.com",
  messagingSenderId: "937768869583",
  appId: "1:937768869583:web:537c940cd98d6dc32561ba"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db