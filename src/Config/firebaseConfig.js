// v9 compat packages
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkMLxwpKi8nJGnqoaiZSpkZackJaN-Xg4",
    authDomain: "react-crud-app-f8147.firebaseapp.com",
    projectId: "react-crud-app-f8147",
    storageBucket: "react-crud-app-f8147.appspot.com",
    messagingSenderId: "671289005660",
    appId: "1:671289005660:web:5c9239ccf59e5d5bfd7899",
    measurementId: "G-50PPZVY8PK"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp