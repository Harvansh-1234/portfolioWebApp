// import firebase from "firebase";
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDwipv8tjvKqupiuVICBq_R02q5bZJx5MY",
    authDomain: "contactform-e2e64.firebaseapp.com",
    projectId: "contactform-e2e64",
    storageBucket: "contactform-e2e64.appspot.com",
    messagingSenderId: "901205370739",
    appId: "1:901205370739:web:4eeac65166a5e0e9e70706"
  };


  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb;