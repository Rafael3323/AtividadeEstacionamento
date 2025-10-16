import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMQS177nSIyBLpZJLA74Zeu2Gkkf-d1vK",
  authDomain: "estacionamento-b8d26.firebaseapp.com",
  projectId: "estacionamento-b8d26",
  storageBucket: "estacionamento-b8d26.appspot.com",
  messagingSenderId: "456096153331",
  appId: "1:456096153331:web:836e3a1efbdfc11aa3af86",
  measurementId: "G-MK84287RX3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
