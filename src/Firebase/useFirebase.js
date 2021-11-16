import { useEffect, useState } from "react";
import initializeFirebase from "./Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(undefined)
    const [isloading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // GOOGLE POP UP LOGIN ===>>>>
    const signInWithgoogle = (history, comeFrom) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                history.push(comeFrom)
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setIsloading(false)
            })
    };

    // REGISTER =====>>>>>>
    const signUpWithEmail = (name, email, password, history, comeFrom) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, ...rest } = result.user;
                const userInfo={displayName:name,email:email,...rest}
                setUser(userInfo)
                setIsloading(true)
                updateProfile(auth.currentUser, { displayName: name })
                history.push(comeFrom);
            }).catch(error => setError(error.message)).finally(() => {setIsloading(false) })
                
    };

    // LOGIN ===>>>>>
    const signInWithEmail = (email, password, history, comeFrom) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                history.push(comeFrom);
            }).catch(error => {
                setError(error.message)
                console.log(error);
            }).finally(() => { setIsloading(false) })
    };
    
    // CHEKING VISITOR  STATE ====>>>>
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }

            else {
                setUser({})
            }
            setIsloading(false)

            return () => unSubscribe;
        })
    }, []);

    // LOG OUT ====>>>>>
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => setError(error.message)).finally(() => { setIsloading(false) })
    };


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