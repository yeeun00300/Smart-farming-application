// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDzW5aaNQO469Ykdact7O8hrewGIppesHY",
  authDomain: "login-page-87039.firebaseapp.com",
  databaseURL: "https://login-page-87039-default-rtdb.firebaseio.com",
  projectId: "login-page-87039",
  storageBucket: "login-page-87039.appspot.com",
  messagingSenderId: "461008593052",
  appId: "1:461008593052:web:e7b607c5752fc37d10cd59"

})

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage=getStorage(firebaseApp);
export { db, auth ,storage};