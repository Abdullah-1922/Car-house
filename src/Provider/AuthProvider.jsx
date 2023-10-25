/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

 const authInfo ={
  signIn,
  createUser,
  

 }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;