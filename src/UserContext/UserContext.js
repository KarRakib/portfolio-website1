import React, { createContext, useEffect, useState } from 'react';
import  { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const authContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)

    const useRegister = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const userLogin = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        
      const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
       return ()=> unsubscribe   
       
    }, []);
    const logOut = () =>{
      return signOut(auth)
    }
    const authInfo = {user, useRegister,userLogin,loader,logOut}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;