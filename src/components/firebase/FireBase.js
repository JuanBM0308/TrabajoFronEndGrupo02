import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyComv6Q5_2swSP-g28HUE7cTUC-o_xL_Pk",
  authDomain: "smartbazzar-2cd42.firebaseapp.com",
  projectId: "smartbazzar-2cd42",
  storageBucket: "smartbazzar-2cd42.appspot.com",
  messagingSenderId: "356012065880",
  appId: "1:356012065880:web:8587678384b21ca7dc362d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
