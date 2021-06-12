import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: yourApiKey,
  authDomain: yourAuthDomain,
  projectId: yourProjectId,
  storageBucket: yourStorageBucket,
  messagingSenderId: yourMessagingSenderId,
  appId: yourAppId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
