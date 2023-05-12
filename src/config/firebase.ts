import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCf2BzBgbg8wxCsOSy4drDZyh0Xi-knZKA',
    authDomain: 'projects02-3340c.firebaseapp.com',
    projectId: 'projects02-3340c',
    storageBucket: 'projects02-3340c.appspot.com',
    messagingSenderId: '875943920056',
    appId: '1:875943920056:web:f2228be78c4a86b4310f4d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
