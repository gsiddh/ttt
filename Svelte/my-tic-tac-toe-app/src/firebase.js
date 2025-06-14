import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyD37s0ZJeXjVUQRhGlO1cKgmGwk0GvbF00",
  authDomain: "mess-auto.firebaseapp.com",
  projectId: "mess-auto",
  storageBucket: "mess-auto.appspot.com",
  messagingSenderId: "324484105269",
  appId: "1:324484105269:web:38d87b14b824d6a8f1dd7c",
  measurementId: "G-2HTD1D1DX4"
};

const app = firebase.initializeApp(firebaseConfig);

export { app };
