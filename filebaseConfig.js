import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { Alert } from "react-native";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAF80aaKn8IaM76h9cA--CIM-LH0xnVYZU",
  authDomain: "socialapp-91506.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "socialapp-91506",
  storageBucket: "socialapp-91506.appspot.com",
  messagingSenderId: "1059712052899",
  appId: "1:1059712052899:web:c70d65e0e1654a882c1916",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(app);
const db = getFirestore(app);

// API Authentication
const addUserProfile = async (userId, data) => {
  try {
    const newData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
    await setDoc(doc(db, "users", userId), newData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Có lỗi", "Email hoặc mật khẩu chưa chính xác!");
    });
};

export const registerUser = (data) => {
  if (data.password !== data.passwordComfirm) {
    Alert.alert("Có lỗi!", "Mật khẩu chưa chính xác");
  } else {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        Alert.alert("Thành Công!", "Đăng ký thành công");

        // Signed in
        const user = userCredential.user;

        addUserProfile(user.uid, data);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Có lỗi!", errorCode);
        // ..
      });
  }
};

export const resetPassword = (email) => {
  if (email !== null) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email đặt lại mật khẩu đã được gửi thành công!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  } else {
    alert("Hãy nhập email");
  }
};

//End Autentication
