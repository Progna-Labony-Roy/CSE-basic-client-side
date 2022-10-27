import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext =createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin =(provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Current User", currentUser);
          setUser(currentUser);
         setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);


    const authInfo={ user ,loading,googleLogin,createUser,signIn,updateUserProfile,logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;