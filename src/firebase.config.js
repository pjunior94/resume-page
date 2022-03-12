import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore/lite";

var firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	projectId: process.env.REACT_APP_PROJECT_ID,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
