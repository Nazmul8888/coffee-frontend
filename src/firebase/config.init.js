// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEB5Jcy0xB-z1Fp1Dlrs1-ACUVOPuJ5s",
  authDomain: "coffee-store-97ae1.firebaseapp.com",
  projectId: "coffee-store-97ae1",
  storageBucket: "coffee-store-97ae1.appspot.com",
  messagingSenderId: "598604180636",
  appId: "1:598604180636:web:40f58efefb26190b781159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;