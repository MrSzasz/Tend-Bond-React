import {
  initializeApp
} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAU_iAxMAdLUH9ReZ3bXQxSQZ7Lo-BE_Vo",
  authDomain: "trend-bond.firebaseapp.com",
  projectId: "trend-bond",
  storageBucket: "trend-bond.appspot.com",
  messagingSenderId: '458719807322',
  appId: "1:458719807322:web:f8a118eb75e65880f81563"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app
}