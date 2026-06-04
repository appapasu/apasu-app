import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTvqB1bsyHk5yEyZeox-XBdN7hHIMiRtY",
  authDomain: "apasu-3a362.firebaseapp.com",
  databaseURL: "https://apasu-3a362-default-rtdb.firebaseio.com",
  projectId: "apasu-3a362",
  storageBucket: "apasu-3a362.firebasestorage.app",
  messagingSenderId: "93172551709",
  appId: "1:93172551709:web:56cc9ab12fc5c727c6b6f4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.db = db;

set(ref(db, "prova_connexio"), {
  missatge: "Firebase connectat amb APASU",
  data: new Date().toISOString()
});

console.log("Prova enviada a Firebase");
