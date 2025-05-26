import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user,setUser] = useState(null)

//   console.log(user);
  // user register
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   user sign out 

const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
}


//   always observe user's

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        if(currentUser){
        setUser(currentUser)
        }
        setLoading(false)
    })
    return ()=> {
        unSubscribe()
    }
},[])

  const authInfo = {
    loading,
    registerUser,
    signInUser,
    signOutUser,
    user,
    setUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
