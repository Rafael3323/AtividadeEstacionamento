// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"; // <-- faltava essa linha
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMQS177nSIyBLpZJLA74Zeu2Gkkf-d1Vk",
  authDomain: "estacionamento-b8d26.firebaseapp.com",
  projectId: "estacionamento-b8d26",
  storageBucket: "estacionamento-b8d26.firebasestorage.app",
  messagingSenderId: "456968153331",
  appId: "1:456968153331:web:836e3a1efbdfc11aa3af86",
  measurementId: "G-MK84287RX3"
};

// Inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);