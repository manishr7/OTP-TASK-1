
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyB_1JhlC2dAYAqjTsC5-sYdPsOwt_afU5g",
  authDomain: "otpverifier-d2adb.firebaseapp.com",
  projectId: "otpverifier-d2adb",
  storageBucket: "otpverifier-d2adb.appspot.com",
  messagingSenderId: "1019360852203",
  appId: "1:1019360852203:web:d67529432d33db790aa6ae"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

