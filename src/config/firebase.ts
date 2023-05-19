import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import keys from './keys.json';

const firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
