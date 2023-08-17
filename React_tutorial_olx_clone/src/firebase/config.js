import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuoBHs_1qTx1DqSWKni-dVbfOBJ2nNh60",
    authDomain: "fir-3a103.firebaseapp.com",
    projectId: "fir-3a103",
    storageBucket: "fir-3a103.appspot.com",
    messagingSenderId: "659254137781",
    appId: "1:659254137781:web:35350308c1ca5afeb9bffc",
    measurementId: "G-4R0BMFKS89"
  };
export default firebase.initializeApp(firebaseConfig)