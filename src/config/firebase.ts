import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCZTmMPFvL0ms6CogGOyHCqUFZwXnTiqDo',
    authDomain: 'project3-7491d.firebaseapp.com',
    projectId: 'project3-7491d',
    storageBucket: 'project3-7491d.appspot.com',
    messagingSenderId: '381769521209',
    appId: '1:381769521209:web:16a319506d3268e2d095e8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
