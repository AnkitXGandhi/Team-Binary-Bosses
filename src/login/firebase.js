import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0JjQQ--9J42VKl38iWw1-YwGu8ffVVVs",
  authDomain: "skillsailer.firebaseapp.com",
  projectId: "skillsailer",
  storageBucket: "skillsailer.appspot.com",
  messagingSenderId: "369626953665",
  appId: "1:369626953665:web:906df2fa0ab2b73deaa140",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const handleSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Signup failed:", error);
  }
};

export { handleLogin, handleSignup };

export { auth };
