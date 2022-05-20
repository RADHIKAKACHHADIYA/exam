import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDJnOzEt1VOQxpn4ac-ETXZpPoITac8TI4",
    authDomain: "examf-c238b.firebaseapp.com",
    projectId: "examf-c238b",
    storageBucket: "examf-c238b.appspot.com",
    messagingSenderId: "48162044107",
    appId: "1:48162044107:web:5aeaf26efedb837a4a834e",
    measurementId: "G-6SLENNV78N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);