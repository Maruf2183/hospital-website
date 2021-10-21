import { useEffect, useState } from "react";
import initializeFirebase from "./Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase()

const useFirebase = () => {


    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isloading,setIsloading]=useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithgoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                
            })

            .catch(error => setError(error.message))
            .finally(() => {
            setIsloading(false)
        })
    }


    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setIsloading(false)
              
              
          })
    }
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                
            })
            .catch(error => setError(error.message))
            .finally(() => {
            setIsloading(false)
        })

    }








    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
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
            isloading,
            logOut


        }
    )


}

export default useFirebase;