// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TUSENDERID",
  appId: "TUAPPID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Exportar Firestore para usarlo
export const db = getFirestore(app);