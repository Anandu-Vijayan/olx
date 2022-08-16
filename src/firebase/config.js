import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCzDy6q6YjDfHAQQYYPeiF-JDjii729-yA",
    authDomain: "olx-clone-1491b.firebaseapp.com",
    projectId: "olx-clone-1491b",
    storageBucket: "olx-clone-1491b.appspot.com",
    messagingSenderId: "312627525263",
    appId: "1:312627525263:web:b42dc4828e51fdf6ca22fa",
    measurementId: "G-8JGNJ4QF39"
  };
  export default firebase.initializeApp(firebaseConfig)