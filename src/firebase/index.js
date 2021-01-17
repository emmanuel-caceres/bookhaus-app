import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
        apiKey: "AIzaSyA_-a67Pqbn9dmy8oyBgb63m-eNIQQ5FvI",
        authDomain: "bookhaus-b0d5e.firebaseapp.com",
        projectId: "bookhaus-b0d5e",
        storageBucket: "bookhaus-b0d5e.appspot.com",
        messagingSenderId: "634631431798",
        appId: "1:634631431798:web:20457c8d21f12c351f6157"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}