import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTh2Jd0MVdzp-ZSl7o9a9QERM4Dcvrxvs",
  authDomain: "apasu-cloud.firebaseapp.com",
  databaseURL: "https://apasu-cloud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apasu-cloud",
  storageBucket: "apasu-cloud.firebasestorage.app",
  messagingSenderId: "28779028755",
  appId: "1:28779028755:web:a60e83b598f85a48dd3ae6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

set(ref(db, "prova_connexio"), {
  missatge: "APASU Cloud connectat",
  data: new Date().toISOString()
});
window.guardarSoci = function() {
  alert("Funciona");
}
