import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


var firebaseConfig = {
    apiKey: "AAAA87rgyIo:APA91bGvEOsx9DHO_eCIpvyVwjqVAoEeDAZaJUNIJxqRJbylzXa0kCug2qQ8PncEBmEz0wfRnY6zTccs81Womqo6mcbmUOUbH53IBh0Y0pzkZIOJdYyDSDVmj1mrHpBJnh8Xjg4pDvAD",
    projectId: "resume-95d5b",
    databaseURL: "https://resume-95d5b-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "resume-95d5b-default-rtdb.europe-west1.firebasedatabase.app",
    // OPTIONAL
    storageBucket: "resume-95d5b-default-rtdb",
    messagingSenderId: "1046812346506"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;