import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDUC2eTmBACa56zBP1Yoq3XqPP5b0wo4IA",
  authDomain: "learn-lingo-9ba41.firebaseapp.com",
  databaseURL: "https://learn-lingo-9ba41-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-9ba41",
  storageBucket: "learn-lingo-9ba41.appspot.com",
  messagingSenderId: "522365728164",
  appId: "1:522365728164:web:e506c6ca02f04afec1bd31",
  measurementId: "G-CLY09PHT69"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;