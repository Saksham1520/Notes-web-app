import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAa47sSTXAUVC5z6Ne1wPJ21LfbUmUGHf8",
  authDomain: "notesapp-66d62.firebaseapp.com",
  projectId: "notesapp-66d62",
  storageBucket: "notesapp-66d62.firebasestorage.app",
  messagingSenderId: "22622416070",
  appId: "1:22622416070:web:71be506cf3c81f1654bbc7",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);

const firestore = getFirestore(firebaseapp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  console.log(user);

  const createNewNotes = async (title, content) => {
    return await addDoc(collection(firestore, "notes"), {
      title,
      content,
      userID: user.uid,
      userEmail: user.email,
    });
  };

  const getAllNotes = () => {
    const userID = user ? user.uid : null;
    if (!userID) return Promise.resolve([]);
    const notesQuery = query(
      collection(firestore, "notes"),
      where("userID", "==", userID)
    );

    return getDocs(notesQuery);
  };

  const deleteNote = async (id) => {
    const noteRef = doc(firestore, "notes", id);
    await deleteDoc(noteRef);
  };

  const logoutUser = () => {
    return signOut(firebaseAuth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        registerUser,
        loginUser,
        isLoggedIn,
        createNewNotes,
        getAllNotes,
        deleteNote,
        logoutUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
