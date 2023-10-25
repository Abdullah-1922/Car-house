// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-bxJJOwqevKIti5ymu3slAcOx0WUXJi0",
  authDomain: "assignment-10-d796b.firebaseapp.com",
  projectId: "assignment-10-d796b",
  storageBucket: "assignment-10-d796b.appspot.com",
  messagingSenderId: "499821293692",
  appId: "1:499821293692:web:27c6c56d243c265fefd9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

