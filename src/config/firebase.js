import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDFIqT-nYlmg4jIALBdRbaybIUA98AzBcg",
  authDomain: "eventos-7dda6.firebaseapp.com",
  databaseURL: "https://eventos-7dda6.firebaseio.com",
  projectId: "eventos-7dda6",
  storageBucket: "",
  messagingSenderId: "400607574255",
  appId: "1:400607574255:web:34b54b1dbdba994d5e031a"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
