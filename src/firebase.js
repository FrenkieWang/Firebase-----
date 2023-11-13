import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDBrrbK1Q9HoQUFs4SZju0uaCTuZaheL_8",
  authDomain: "react-firebase-auth-20231113.firebaseapp.com",
  projectId: "react-firebase-auth-20231113",
  storageBucket: "react-firebase-auth-20231113.appspot.com",
  messagingSenderId: "430757683351",
  appId: "1:430757683351:web:7eb688e506728159f2c9d2",
  measurementId: "G-39619SGKHH"
})

export const auth = app.auth()
export default app
