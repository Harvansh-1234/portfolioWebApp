
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfqPnNfPI-LfLIRRiIIYc_EP0xNt1tI_Y",
  authDomain: "contact-ff240.firebaseapp.com",
  databaseURL: "https://contact-ff240-default-rtdb.firebaseio.com",
  projectId: "contact-ff240",
  storageBucket: "contact-ff240.appspot.com",
  messagingSenderId: "1079094526396",
  appId: "1:1079094526396:web:935ccb8184e4233ed26bb9"
};

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb;