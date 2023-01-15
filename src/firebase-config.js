import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyBrF7EuKU6_ZhcRfGD7rzO_APTL1IHEHyM",
  authDomain: "contact-managerapp-b87aa.firebaseapp.com",
  projectId: "contact-managerapp-b87aa",
  storageBucket: "contact-managerapp-b87aa.appspot.com",
  messagingSenderId: "663962725712",
  appId: "1:663962725712:web:ce437abbe1642703085055"
};

const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app)