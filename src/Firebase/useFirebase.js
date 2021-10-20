import { useEffect, useState } from "react";
import initializeFirebase from "./Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase()

const useFirebase = () => {


    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithgoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => console.log(result.user))

            .catch(error => setError(error.message))
    }


    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message));
    }
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message));

    }








    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, []);



    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }







    return (
        {
            user,
            error,
            signInWithgoogle,
            signUpWithEmail,
            signInWithEmail,
            logOut


        }
    )


}

export default useFirebase;