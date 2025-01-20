import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9M8CFzY9OTPoofyp-uQy2F52OLMM8C9c',
  authDomain: 'culinary-book-app.firebaseapp.com',
  projectId: 'culinary-book-app',
  storageBucket: 'culinary-book-app.firebasestorage.app',
  messagingSenderId: '1024130650117',
  appId: '1:1024130650117:web:2163167bedb357895ccc6c',
  measurementId: 'G-4VZTGE4ZZK',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
