import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext =createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin =(provider) =>{
        return signInWithEmailAndPassword(auth,provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Current User", currentUser);
          if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
          }
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);


    const authInfo={ user ,loading,googleLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;