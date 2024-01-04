// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6pnQt1PpeKQQ6MaeWmb5xWyVh6MgLpVU",
  authDomain: "study-area-finder.firebaseapp.com",
  projectId: "study-area-finder",
  storageBucket: "study-area-finder.appspot.com",
  messagingSenderId: "905004972090",
  appId: "1:905004972090:web:f4499230d00bb67ee85d03",
  measurementId: "G-4BN44MQ5MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
