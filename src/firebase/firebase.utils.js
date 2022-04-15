import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRxbJUA4gc8FpIfWvSnlJU0uWqiH1oH7M",
    authDomain: "beauti-clothing-db.firebaseapp.com",
    projectId: "beauti-clothing-db",
    storageBucket: "beauti-clothing-db.appspot.com",
    messagingSenderId: "493910038145",
    appId: "1:493910038145:web:d6a1be257751b0f2a6df80",
    measurementId: "G-X0W2DRQ00H"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const firestore = getFirestore(app);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => signInWithPopup(auth, provider);

  export default app;