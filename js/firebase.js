import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "LA_TEUA_API_KEY",
  authDomain: "apasu-3a362.firebaseapp.com",
  databaseURL: "https://apasu-3a362-default-rtdb.firebaseio.com",
  projectId: "apasu-3a362",
  storageBucket: "apasu-3a362.appspot.com",
  messagingSenderId: "93172551709",
  appId: "EL_TEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
