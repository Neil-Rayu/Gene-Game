// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js';
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPcDXBVx58MlwH38_WxQ_WC66nagaeJ5w',
  authDomain: 'planta-victoris.firebaseapp.com',
  projectId: 'planta-victoris',
  storageBucket: 'planta-victoris.appspot.com',
  messagingSenderId: '111810101736',
  appId: '1:111810101736:web:e9df090eb48437ea58245d',
  measurementId: 'G-X5KFQT41JG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let provider = new GoogleAuthProvider();
// export function signOut();
// export function signInWithPopup();
export { app, auth, provider };
