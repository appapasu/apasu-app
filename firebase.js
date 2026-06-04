import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const observacions = document.getElementById("observacions").value.trim();

  if (!nom) {
    alert("Escriu el nom del soci.");
    return;
  }

  push(ref(db, "socis"), {
    nom,
    email,
    telefon,
    observacions,
    dataAlta: new Date().toISOString()
  });

  document.getElementById("nom").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("observacions").value = "";

  alert("Soci guardat correctament");
};

window.eliminarSoci = function(id) {
  if (confirm("Vols eliminar este soci?")) {
    remove(ref(db, "socis/" + id));
  }
};

onValue(ref(db, "socis"), (snapshot) => {
  const contenidor = document.getElementById("llistaSocis");

  if (!contenidor) return;

  let html = "<h2>Llistat de socis</h2>";

  if (!snapshot.exists()) {
    html += "<p>Encara no hi ha socis registrats.</p>";
    contenidor.innerHTML = html;
    return;
  }

  snapshot.forEach((item) => {
    const soci = item.val();
    const id = item.key;

    html += `
      <div class="soci-item">
        <strong>${soci.nom || ""}</strong><br>
        ${soci.email || ""}<br>
        ${soci.telefon || ""}<br>
        <small>${soci.observacions || ""}</small><br><br>
        <button class="danger" onclick="eliminarSoci('${id}')">Eliminar</button>
      </div>
    `;
  });

  contenidor.innerHTML = html;
});
