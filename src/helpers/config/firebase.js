// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBRzoWdJblGhJQBXy1v5nE6Rr-vqovEpSI",
	authDomain: "goodfoodproject-93eff.firebaseapp.com",
	projectId: "goodfoodproject-93eff",
	storageBucket: "goodfoodproject-93eff.appspot.com",
	messagingSenderId: "613538158487",
	appId: "1:613538158487:web:bd9ce96424404ea81716d2",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
