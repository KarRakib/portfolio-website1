import React, { createContext, useState } from 'react';
import  { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const authContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const useRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user, useRegister,userLogin}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;