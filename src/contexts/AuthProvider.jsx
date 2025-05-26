import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.config'
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);

    const registerUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const authInfo = {
        loading,
       registerUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;