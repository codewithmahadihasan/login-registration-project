// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHk7zUmhQomtlwUVrj0moHg0i9qb5w738",
    authDomain: "sign-up-9a2cc.firebaseapp.com",
    projectId: "sign-up-9a2cc",
    storageBucket: "sign-up-9a2cc.appspot.com",
    messagingSenderId: "204051891946",
    appId: "1:204051891946:web:fe1cfa2beb08b92062f993",
    measurementId: "G-VYWKJ2S56L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app