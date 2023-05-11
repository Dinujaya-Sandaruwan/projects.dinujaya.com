import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDUnSrtqeWruSwFGAtTsxDeD3rA_ABYMYY',
    authDomain: 'myprojects-6b0fb.firebaseapp.com',
    projectId: 'myprojects-6b0fb',
    storageBucket: 'myprojects-6b0fb.appspot.com',
    messagingSenderId: '1043139604558',
    appId: '1:1043139604558:web:468e1c6c3fc6b791c0531f',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
