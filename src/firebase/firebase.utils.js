import {initializeApp} from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc } from 'firebase/firestore';
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

  //const db = getFirestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = await addDoc(`users/${userAuth.uid}`);
    const snapShot = await userRef.getDoc();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {

        }
    }
  }

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const firestore = getFirestore(app);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => signInWithPopup(auth, provider);

  export default app;