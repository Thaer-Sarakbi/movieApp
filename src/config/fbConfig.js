import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEqoGGhV43TBKXlGEOJapUt95zuj6SWww",
    authDomain: "movie-app-4f9b6.firebaseapp.com",
    databaseURL: "https://movie-app-4f9b6.firebaseio.com",
    projectId: "movie-app-4f9b6",
    storageBucket: "movie-app-4f9b6.appspot.com",
    messagingSenderId: "900515641445",
    appId: "1:900515641445:web:3a03e795d645f447ed2e8c",
    measurementId: "G-CMVV28MLD2",
    userProfile: 'users', 
    useFirestoreForProfile: true, 
    enableRedirectHandling: false, 
    resetBeforeLogin: false
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase